import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-2"><strong>Phone:</strong> +1 469 351 9012</p>
        <p className="text-lg mb-4"><strong>Email:</strong> sidss.patwariitsme@gmail.com</p>
        <div className="space-x-4">
          <a href="https://www.linkedin.com/in/your-link" target="_blank" className="underline text-blue-700">LinkedIn</a>
          <a href="https://github.com/your-github" target="_blank" className="underline text-gray-900">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
