import React from 'react';

const Skills = () => {
  const skills = [
    'Java 8/11+', 'Spring Boot', 'Spring Security', 'REST APIs', 'Microservices',
    'Kafka', 'RabbitMQ', 'OAuth2', 'TDD', 'CI/CD',
    'React.js', 'Redux', 'Angular', 'GraphQL',
    'AWS (EC2, S3, RDS, Lambda)', 'Azure (Blob, AKS, Service Bus)',
    'Docker', 'Kubernetes',
    'PostgreSQL', 'MongoDB',
    'JUnit', 'Mockito', 'JIRA', 'Git', 'Jenkins'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
