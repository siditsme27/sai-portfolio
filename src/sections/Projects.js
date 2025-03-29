import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Banking Transaction Management System',
      description:
        'Built at Deutsche Bank — real-time transaction platform using Spring Boot, React.js, Kafka, and PostgreSQL. Implemented secure APIs and deployed microservices to AWS.'
    },
    {
      name: 'Legal Content Management Platform',
      description:
        'Created at Thomson Reuters — Spring Boot + GraphQL APIs for search and indexing. Used Kafka for messaging and Azure DevOps for CI/CD.'
    },
    {
      name: 'Smart Pension Platform',
      description: 'Big Data-based pension system using analytics and predictive modeling for retirement planning.'
    },
    {
      name: 'Online Shopping Site',
      description: 'Developed using HTML/CSS/JS and MySQL as backend. Includes dynamic catalog, cart, and checkout flow.'
    },
    {
      name: 'Healthcare Appointment System',
      description: 'Doctor-patient appointment system using Spring Boot backend and Angular frontend with secure login.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-6 text-left">
          {projects.map((proj, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
