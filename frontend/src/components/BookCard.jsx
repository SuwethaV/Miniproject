import React from 'react';

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition duration-300">
      <img
        src={book.image}
        alt={book.title}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-md font-bold text-gray-900">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author}</p>
      <p className="text-blue-600 font-semibold mt-2">{book.price}</p>
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>
  );
}

export default BookCard;
