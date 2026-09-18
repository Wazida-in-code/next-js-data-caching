import React from 'react';
import BookCard from '../components/BookCard';

const getBooks = async() => {
    const res = await fetch('http://localhost:5000/books', {next : {revalidate: 10}});
    if (!res){
        throw new Error("Failed to load fetch books!")
    }
    return res.json()
}

const BookPage = async() => {

    const books = await getBooks()

    return (
        <div>
            <h1>Books:{books.length}</h1>

            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookPage;