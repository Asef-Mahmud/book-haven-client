import React, { use } from 'react';
import { Link } from 'react-router';

const dataPromise = fetch('http://localhost:3000/books').then(response => response.json())

const AllBooks = () => {
    const books = use(dataPromise)
    return (
        <div className='max-w-[1600px] mx-auto px-3 md:px-10 py-5 md:py-10 lg:py-15'>
                <h1 className='text-4xl font-bold text-primary text-center pb-10'>All Books</h1>
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
                        books.map((book, index) => <tr>
                        <th>{index+1}</th>
                        <td>
                            <div className="flex items-center gap-3 mt-3">
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
                        <td><span className="badge badge-xs badge-warning font-bold">{book.genre}</span></td>
                        
                        <td>   
                            <div className="flex items-center mt-1">
                            {Array.from({ length: book.rating }).map((_, i) => (<span key={i} className="text-primary text-xl">★</span>))}
                            </div>
                        </td>
                         <td className=''>
                            <Link><button className="btn btn-ghost btn-xs">View Details</button></Link>
                        </td>

                    </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllBooks;