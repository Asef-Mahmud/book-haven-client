import { FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import { bookToast } from '../../Utils/booktoast';
import useAxios from '../../hooks/useAxios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BookDetails = () => {

    const {user} = useContext(AuthContext)
    const {coverImage, title, author, genre, rating, summary, _id:bookId} = useLoaderData()
    const axiosInstance = useAxiosSecure()

    // States
    const [newComment, setNewComment] = useState('')
    const [comments, setComments] = useState([])
    



    // To load the comments in the UI
      useEffect(() => {
        axiosInstance.get(`/comments/${bookId}`)
        .then(data => {
            setComments(data.data)
        })
    }, [bookId, axiosInstance]);
    

    const handleComments = () => {

         if (!newComment.trim()){
            return;
         }
            
        const commentData = {
            bookId: bookId,
            userName: user.displayName,
            photoURL: user.photoURL,
            comment: newComment,
            timestamp: Date.now()
        };

        axiosInstance.post(`/comments`, commentData)
        .then(data => {
            if(data.data.insertedId){
                bookToast.success("Comments Added")
                const updatedComments = ([...comments, commentData])
                updatedComments.sort((a,b) =>(b.timestamp - a.timestamp))
                setComments(updatedComments)
                setNewComment('')
            }
        })
        .catch(error => {
        bookToast.error("Failed to post comment");
        });

    }



    return (
        <div className='max-w-[1600px] mx-auto'>
            <div className="max-w-4xl m-10 p-10 mx-auto shadow-lg rounded-xl bg-base-100 border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                    {/* Cover Image */}
                    <div className="md:col-span-1">
                    <img
                        src={coverImage}
                        alt={title}
                        className="rounded-xl shadow-md w-full object-cover"
                    />
                    </div>
                    

                    {/* Book Info */}
                    <div className="md:col-span-2 space-y-3">

                    <h1 className="text-3xl font-bold text-primary">{title}</h1>
                
                    <p className="text-lg font-semibold text-neutral">by {author}</p>

                    <span className="badge badge-warning font-bold px-4 py-3">
                        {genre}
                    </span>

                    <div className="flex items-center gap-1 text-primary text-xl">
                        {Array.from({ length: Number(rating) }).map((_, i) => (
                        <span key={i}>★</span>
                        ))}
                    </div>

                    <p className="mt-4 text-neutral leading-relaxed">
                        {summary}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-5">
                        <button onClick={() => bookToast.success('Added to Favorites!')}  className="btn btn-primary text-base-200 rounded-full px-6">Add to Favorites</button>
                        <Link to={-1}><button className="btn btn-outline rounded-full px-6">Go Back</button></Link>
                    </div>
                    </div>

                </div>
            </div>

                {/* Comments */}
            <div className='max-w-4xl m-10 p-10 mx-auto shadow-lg'>
                <div className="mt-6 p-4 border rounded-xl bg-base-100">
                    <h3 className="text-lg font-bold mb-2">Add a Comment</h3>

                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Write your comment..."
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                    />
                    <button
                        onClick={handleComments}
                        className="btn btn-primary text-base-200 mt-3">
                        Post Comment
                    </button>
                </div>


                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4">Comments</h3>
                    {comments.length === 0 && (<p className="text-neutral-500">No comments yet. Be the first!</p>)}
                    <div className="flex flex-col gap-4">
                        {comments.map((comment, index) => (
                        <div key={index} className="p-4 border border-primary rounded-xl bg-base-100 shadow-sm">
                            
                            <div className="flex items-center gap-3 mb-2">
                            <img 
                                src={comment.photoURL} 
                                alt={comment.userName} 
                                className="w-10 h-10 rounded-full object-cover" 
                            />
                            <div>
                                <p className="font-bold">{comment.userName}</p>
                                <p className="text-xs text-neutral-500">
                                {new Date(comment.timestamp).toLocaleString()}
                                </p>
                            </div>
                            </div>
                            <p className="text-neutral wrap-break-word text-sm">{comment.comment}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>



  
        </div>
        
    );
};

export default BookDetails;