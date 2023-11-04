// import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  const book = {
    id,
    title: 'Libro 1',
    author: 'Autor 1',
    description: 'Descripción del libro',
    price: 19.99,
    // ...
  };

  return (
    <div>
      <h1>Time to be booky!</h1>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <p>Precio: ${book.price}</p>
    </div>
  );
};

export default BookDetails;