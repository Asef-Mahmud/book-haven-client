import { FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import { bookToast } from '../../Utils/booktoast';

const BookDetails = () => {

    const {coverImage, title, author, genre, rating, summary} = useLoaderData()

    const handleFavourite = () => {
        bookToast.success("Added to Favorites!")
    }

    return (
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
                    <button onClick={handleFavourite} className="btn btn-primary text-base-200 rounded-full px-6">Add to Favorites</button>
                    <Link to={-1}><button className="btn btn-outline rounded-full px-6">Go Back</button></Link>
                </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;