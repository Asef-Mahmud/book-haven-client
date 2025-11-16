import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import Swal from 'sweetalert2';
import { bookToast } from '../../Utils/booktoast';



const MyBooks = () => {
    const {user, loading} = useContext(AuthContext)
    const [books, setBooks] = useState([])
    const updateBookRef = useRef(null)
    const [selectedBook, setSelectedBook] = useState(null)


    useEffect(()=>{
        if(loading){
            <Loader></Loader>
        }

        if(user?.email){
            fetch(`http://localhost:3000/books?email=${user.email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBooks(data)
            })
        }
    }, [user?.email, loading])




    
    
        // HandleDeleteBook
        const handleDeleteBook = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                color: "var(--color-neutral)",
                background: "var(--color-base-100)",
                iconColor: "var(--color-primary)",
                confirmButtonColor: "var(--color-primary)",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    
                    // Fetch data to delete
                    fetch(`http://localhost:3000/books/${id}`, {
                        method: 'DELETE'
                    })
                    .then(response => response.json())
                    .then(data => {
                        if(data.deletedCount){
                            bookToast.success('The Book has been deleted successfully')
                        }
    
                        // Removal from the UI 
                            const remainingBooks = books.filter(book => (book._id !== id))
                            setBooks(remainingBooks)
                    })
    
                }
            });
        }
        
    
        // UPDATE

        // MOdal for Updating Book
        function handleUpdateBookModal(book) {
        setSelectedBook(book)
        updateBookRef.current.showModal();
    }
    
            // Handle Button to update Book Info
    
        const handleUpdateBook = (event, selectedBook) => {


            event.preventDefault()
            const form = event.target;
    
            const name = form.name.value;
            const author = form.author.value;
            const photo =form.photo.value;
            const genre = form.genre.value;
            const rating = form.rating.value;
            const summary = form.summary.value;
    
    
            const updatedBook = {
                title: name,
                author: author,
                genre: genre,
                rating: rating,
                summary: summary,
                coverImage: photo,
            }
    
            fetch(`http://localhost:3000/books/${selectedBook._id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedBook)
            })
    
            .then(response => response.json())
            .then(data => {
                if(data.modifiedCount){
                    const updatedBooks = books.map(book => book._id === selectedBook._id ? {...book, ...updatedBook} : book)
                    setBooks(updatedBooks)
    
                    // CLosing the modal
                    updateBookRef.current.close()
    
                    bookToast.success('Book Information Updated')
                }
            })
            .catch(error => {
                bookToast.error(error.message)
            })
        }
    

    
    return (
        <div className='max-w-[1600px] mx-auto px-3 md:px-10 py-5 md:py-10 lg:py-15'>
                <h1 className='text-4xl font-bold text-primary text-center pb-10'>My Books</h1>
                {/* Info table */}
                <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                    <tr className='text-base-200 bg-primary'>
                        <th>Sl.No</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Details</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book, index) => 
                            <tr key={book._id} className='border-b border-primary'>
                                <th>{index+1}</th>
                                <td>
                                    <div className="flex items-center gap-3 my-3">
                                        <div className="avatar">
                                        <div className="mask h-12 w-12">
                                            <img
                                            src={book.coverImage}
                                            alt="Avatar Tailwind CSS Component" 
                                            className='object-contain'
                                            />
                                        </div>
                                        </div>
                                        <div className="font-bold">{book.title}</div>
                                    </div>

                                </td>
                                <td>{book.author}</td>
                                <td><span className="badge badge-xs whitespace-nowrap badge-warning font-bold">{book.genre}</span></td>
                                
                                <td>   
                                    <div className="flex items-center mt-1">
                                    {Array.from({ length: book.rating }).map((_, i) => (<span key={i} className="text-primary text-xl">★</span>))}
                                    </div>
                                </td>
                                <td className='flex flex-col justify-center items-start gap-2'>
                                    <button onClick={() => handleDeleteBook(book._id)} className="btn btn-ghost btn-xs rounded-4xl hover:btn-primary hover:text-base-200 mt-2 border-2">Delete</button>
                                    <button onClick={() => handleUpdateBookModal(book)} className="btn btn-ghost btn-xs rounded-4xl hover:btn-primary hover:text-base-200 border border-neutral">Update</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
                

                {/* MODAL for UPDATE */}

                <dialog ref={updateBookRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-3xl mb-3">Book Information Update</h3>
                        {/* Form */}
                        <form onSubmit={(event) => handleUpdateBook(event, selectedBook)}>
                            <fieldset className="fieldset">
                                {/* Book Name */}
                                <label className="label">Book Name</label>
                                <input type="text" name='name' className="input" placeholder="Name of the Book" defaultValue={selectedBook?.title}/>
                                {/* URL */}
                                <label className="label">Book Cover Photo</label>
                                <input type="text" name='photo' className="input" placeholder="Imgbb Photo URL" defaultValue={selectedBook?.coverImage}/>
                                {/* Author */}
                                <label className="label">Author</label>
                                <input type="text" name='author' className="input" placeholder="Book Author" defaultValue={selectedBook?.author}/>
                                {/* Genre */}
                                <label className="label">Genre</label>
                                <input type="text" name='genre' className="input" placeholder="Book Genre" defaultValue={selectedBook?.genre}/>
                                {/* Rating */}
                                <label className="label">Rating</label>
                                <input type="number" name='rating' min="1" max="5" className="input" placeholder="Rating of the Book" defaultValue={selectedBook?.rating}/>
                                {/* Summary */}
                                <label className="label">Summary</label>
                                <input type="text" name='summary' className="input" placeholder="Book Summary" defaultValue={selectedBook?.summary}/>


                                <button className="btn btn-accent text-base-200 rounded-4xl mt-4">Update Information</button>
                            </fieldset>
                        </form>

                        <div className="modal-action">
                        <form method="dialog" className='w-full'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-primary text-base-200 rounded-4xl w-full">Go Back</button>
                        </form>
                        </div>
                    </div>
                </dialog>
        </div>
    );
};

export default MyBooks;