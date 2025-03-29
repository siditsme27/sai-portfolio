import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">Sai Siddharth</h1>
        <div className="space-x-5">
          {['Home', 'About', 'Education'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-300 transition">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
