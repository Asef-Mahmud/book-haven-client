import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAxios from '../../hooks/useAxios';
import axios from 'axios';
import { bookToast } from '../../Utils/booktoast';

const AddBook = () => {

    const {user, books, setBooks} = useContext(AuthContext)
    const axiosInstance = useAxios()


    const handleAddBook = (event) => {
        event.preventDefault()
        const form = event.target;
    
         const title = form.name.value;
         const author = form.author.value;
         const coverImage =form.photo.value;
         const genre = form.genre.value;
         const rating = form.rating.value;
         const summary = form.summary.value;

         const userEmail = form.email.value;


        const newBook = {title, author, coverImage, genre, rating, summary, userEmail}

        // Post Book
        axiosInstance.post('/books', newBook)
        .then(data => {
            if(data.data.insertedId){

                setBooks([...books, {...newBook}])
                event.target.reset()
                bookToast.success('New book added successfully')
            }   
            
        })
        .catch((error) => {
            const message = error.response?.data?.message || error.message;
            bookToast.error(message);
        })






    }

    return (
            <div className="max-w-[1600px] mx-auto px-4 py-16">
                <div className="bg-base-100 max-w-lg mx-auto shadow-2xl rounded-3xl p-10  border-2 border-primary">
                    
                    {/* Heading and intro */}
                    <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-3">Add Your Book</h2>
                    <p className="text-base text-neutral">
                        Every great story begins with a single page. Add your favorite books here to share your world of stories with everyone.
                    </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleAddBook} className="space-y-6">
                    
                    {/* Book Name */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Book Name</label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Title of the Book"
                        className="input input-bordered w-full rounded-xl"
                        required
                        />
                    </div>


                    {/* Author */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Author</label>
                        <input
                        type="text"
                        name="author"
                        placeholder="Book Author"
                        className="input input-bordered w-full rounded-xl"
                        required
                        />
                    </div>

                    {/* Genre */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Genre</label>
                        <input
                        type="text"
                        name="genre"
                        placeholder="Book Genre"
                        className="input input-bordered w-full rounded-xl"
                        required
                        />
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Rating</label>
                        <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        placeholder="Rating (1-5)"
                        className="input input-bordered w-full rounded-xl"
                        required
                        />
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Summary</label>
                        <textarea
                        name="summary"
                        placeholder="Short summary about the book"
                        className="textarea textarea-bordered w-full rounded-xl h-24"
                        required
                        ></textarea>
                    </div>


                    {/* Cover Photo URL */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Cover Photo URL</label>
                        <input
                        type="text"
                        name="photo"
                        placeholder="Paste your book cover URL"
                        className="input input-bordered w-full rounded-xl"
                        required
                        />
                    </div>

                    {/* User Email */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">User Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email of the User"
                        className="input input-bordered w-full rounded-xl"
                        defaultValue={user.email}
                        readOnly
                        />
                    </div>


                    {/* User Name */}
                    <div className="flex flex-col">
                        <label className="label font-semibold text-lg">Username</label>
                        <input
                        type="text"
                        name="username"
                        placeholder="Title of the Book"
                        className="input input-bordered w-full rounded-xl"
                        defaultValue={user?.displayName}
                        required
                        />
                    </div>



                    {/* Submit button */}
                    <button className="btn btn-primary w-full rounded-3xl py-3 mt-4 text-base-200">
                        Add Book
                    </button>
                    </form>
                </div>
            </div>
    );
};

export default AddBook;