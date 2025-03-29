import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4"
    >
      <img
        src="/profile.jpg"
        alt="Sai Siddharth Patwari"
        className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-yellow-400 mb-6 object-cover shadow-lg"
      />
      <h2 className="text-3xl sm:text-5xl font-bold mb-3">Hi, I'm Sai Siddharth Patwari</h2>
      <p className="text-lg sm:text-xl">Senior Full Stack Developer | Java | Spring Boot | React</p>
    </section>
  );
};

export default Home;
