import React from 'react';

// if we want we can regenerate some data by this function & func name should always "generateStaticParams" & it is always async function, it is should export

export const generateStaticParams = async() => {
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();

    return books.slice(1, 3).map(book => ({bookId: book.id}));
}


const BookDetailPage = async ({  params }) => {
    const {bookId} =  await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    const book = await res.json()

    return (
        <div>
            <h2>Book Detail</h2>
            <h2>Title:{book.title}</h2>
            <h3>Author: {book.author}</h3>
            <h3>Price: {book.price}</h3>
            <h4>Category: {book.category}</h4>
            <h5>Description: {book.description}</h5>
        </div>

    //     "id": "1",
    // "title": "The Alchemist",
    // "author": "Paulo Coelho",
    // "price": 450,
    // "category": "Fiction",
    // "description": "A young shepherd follows his d
    );
};

export default BookDetailPage;