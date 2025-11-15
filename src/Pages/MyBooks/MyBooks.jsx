import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyBooksTable from './MyBooksTable';
import Loader from '../../Loader/Loader';

const MyBooks = () => {
    const {user, loading} = useContext(AuthContext)
    const [books, setBooks] = useState([])


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
                        books.map((book, index) => <MyBooksTable index={index} book={book} key={book._id}></MyBooksTable>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyBooks;