import React from 'react';
import BookCard from '../../components/BookCard'; // ✅ Import BookCard

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: '₹499',
    image: '/book1.png',
  },
  {
    id: 2,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '₹399',
    image: '/book2.png',
  },
  {
    id: 3,
    title: 'Ikigai',
    author: 'Francesc Miralles',
    price: '₹299',
    image: '/book3.png',
  },
  
  
];

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">📚 Book Havan</h1>

        <input
          type="text"
          placeholder="Search for books..."
          className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />

        <div className="flex items-center gap-6">
          <button className="text-gray-700 hover:text-blue-600">🛒 Cart</button>
          <button className="text-gray-700 hover:text-blue-600">🔐 Login</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 md:px-10 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Top Picks For You</h2>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
