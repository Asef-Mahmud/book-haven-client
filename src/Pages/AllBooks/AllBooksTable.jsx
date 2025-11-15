import React from 'react';
import { Link } from 'react-router';

const AllBooksTable = ({book, index}) => {
    return (
        <tr>
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
                        <td><span className="badge badge-xs whitespace-nowrap badge-warning font-bold">{book.genre}</span></td>
                        
                        <td>   
                            <div className="flex items-center mt-1">
                            {Array.from({ length: book.rating }).map((_, i) => (<span key={i} className="text-primary text-xl">★</span>))}
                            </div>
                        </td>
                         <td className=''>
                            <Link to={`/book-details/${book._id}`}><button className="btn btn-ghost btn-xs rounded-4xl hover:btn-primary hover:text-base-200">View Details</button></Link>
                        </td>

        </tr>
    );
};

export default AllBooksTable;