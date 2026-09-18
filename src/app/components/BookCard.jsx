import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
    const {id, title, image, description} = book
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>
         {book.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>

          <Link href={`/books/${id}`}>
          <button className="btn btn-primary">Show More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;



// Study about -> SSR SSG ISR & Note it
