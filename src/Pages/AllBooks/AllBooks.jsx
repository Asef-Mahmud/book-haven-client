import React, { use, useContext, useEffect } from 'react';
import { Link } from 'react-router';
import AllBooksTable from './AllBooksTable';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import useAxios from '../../hooks/useAxios';
import { bookToast } from '../../Utils/booktoast';



const AllBooks = () => {

    const {setLoading, loading, books, setBooks} = useContext(AuthContext)
    const axiosInstance = useAxios()


    useEffect(()=>{
        setLoading(true)
            fetch('http://localhost:3000/all-books')
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

    const handleSort = (order) => {
        axiosInstance.get(`/all-books?order=${order}`)
        .then(data => {
            setBooks(data.data);
        })
        .catch(error => {
            bookToast.error(error.message)
        })
    }


    return (
        <div className='max-w-[1600px] mx-auto px-3 md:px-10 py-5 md:py-10 lg:py-15'>

                <div className='pb-8'>
                    <h1 className='text-4xl font-bold text-primary text-center mb-3'>Discover Your Next Adventure</h1>
                    <p className='text-primary mx-10 lg:mx-20 text-center'>"Dive into a world of stories waiting to be explored. From thrilling mysteries to heartwarming tales, browse through our curated collection and find the book that speaks to you. Every page is a new journey — start reading today!"</p>
                </div>
                
                {/* Sorting Button */}
                <div className="dropdown dropdown-end flex justify-center lg:justify-end pb-5">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-primary text-base-100 rounded-4xl px-3">
                        Sort by Rating
                    </div>

                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-xl z-20 w-40 p-2 shadow-md">
                        <li>
                        <button onClick={() => handleSort('asc')}>
                            Rating ↑ Ascending
                        </button>
                        </li>
                        <li>
                        <button onClick={() => handleSort('desc')}>
                            Rating ↓ Descending
                        </button>
                        </li>
                    </ul>
                </div>

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