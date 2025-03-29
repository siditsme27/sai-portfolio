import React from 'react';

const WorkExperience = () => {
  return (
    <section id="work" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
        <div className="space-y-8 text-lg">

          <div>
            <p className="font-semibold text-xl">Java Full-Stack Developer – Deutsche Bank, Dallas, TX</p>
            <p className="italic text-sm mb-2">(April 2023 – Present)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Built a real-time banking transaction system using React.js, Spring Boot, Kafka, and PostgreSQL.</li>
              <li>Integrated OAuth2 authentication and Spring Security for secure API communication.</li>
              <li>Deployed scalable microservices on AWS (EC2, S3, RDS) using Jenkins and Kubernetes.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-xl">Java Backend Developer – Thomson Reuters, Eagan, MN</p>
            <p className="italic text-sm mb-2">(Feb 2021 – Mar 2023)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed Spring Boot microservices and GraphQL APIs for content management.</li>
              <li>Implemented Kafka pipelines for distributed indexing and search operations.</li>
              <li>Used Azure DevOps and Kubernetes for CI/CD and microservices deployment.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-xl">Full Stack Developer – Medstar Health, Columbia, MD</p>
            <p className="italic text-sm mb-2">(Dec 2018 – Jan 2021)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Created React.js frontends and REST APIs with Spring Boot for telehealth systems.</li>
              <li>Handled secure appointment systems using RabbitMQ and OAuth2/JWT authentication.</li>
              <li>Deployed services on AWS and monitored performance using CloudWatch.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
