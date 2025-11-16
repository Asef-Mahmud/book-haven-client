import React, { use, useContext, useEffect } from 'react';
import { Link } from 'react-router';
import AllBooksTable from './AllBooksTable';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';



const AllBooks = () => {

    const {setLoading, loading, books, setBooks} = useContext(AuthContext)


    useEffect(()=>{
        setLoading(true)
            fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBooks(data)
                setLoading(false)
            })

    }, [setBooks, setLoading])

        if(loading){
            <Loader></Loader>
        }


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
                        books.map((book, index) => <AllBooksTable index={index} book={book} key={book._id}></AllBooksTable>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllBooks;