import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {_id: bookId} = useLoaderData()
    const {id} = useParams()

    

    return (
        <div>
            BOOKDETAILS PAGE
        </div>
    );
};

export default BookDetails;