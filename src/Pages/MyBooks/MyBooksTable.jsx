import React from 'react';
import { Link } from 'react-router';

const MyBooksTable = ({book, index}) => {

    const{_id, title, coverImage, genre, author, rating} = book

    return (
        <tr className='border-b border-primary'>
            <th>{index+1}</th>
                        <td>
                            <div className="flex items-center gap-3 my-3">
                                <div className="avatar">
                                <div className="mask h-12 w-12">
                                    <img
                                    src={coverImage}
                                    alt="Avatar Tailwind CSS Component" 
                                    className='object-contain'
                                    />
                                </div>
                                </div>
                                <div className="font-bold">{title}</div>
                            </div>

                        </td>
                        <td>{author}</td>
                        <td><span className="badge badge-xs whitespace-nowrap badge-warning font-bold">{genre}</span></td>
                        
                        <td>   
                            <div className="flex items-center mt-1">
                            {Array.from({ length: rating }).map((_, i) => (<span key={i} className="text-primary text-xl">★</span>))}
                            </div>
                        </td>
                         <td className='flex flex-col justify-center items-start gap-2'>
                            <button className="btn btn-ghost btn-xs rounded-4xl hover:btn-primary hover:text-base-200 mt-2 border-2">Delete</button>
                            <button className="btn btn-ghost btn-xs rounded-4xl hover:btn-primary hover:text-base-200 border border-neutral">Update</button>
                        </td>

        </tr>
    );
};

export default MyBooksTable;