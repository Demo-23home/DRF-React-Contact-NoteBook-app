import React from 'react';

/**
 * HomePage Component
 * 
 * This component represents the home page of the application.
 * It provides information about the project and features a welcoming message.
 */
const HomePage = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '50px', 
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '1.2em',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to DRF-React-ContactTask!</h1>
      <p style={textStyle}>
        This is a Django Rest Framework (DRF) and React project with an authentication system using JWT.
        The project involves CRUD operations on a Contact model, with additional features like search functionality in the frontend.
      </p>
      <p style={textStyle}>
        The project is Dockerized for easy deployment. You can run it using Docker by following the provided instructions in the README.
        Additionally, Redis has been integrated as a caching system to enhance performance. The system caches data for 30 seconds, optimizing data retrieval.
      </p>
      <p style={textStyle}>
        Explore the API documentation using Swagger at <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer">127.0.0.1:8000</a>, 
        and detailed Swagger Docs at <a href="http://127.0.0.1:8000/docs" target="_blank" rel="noopener noreferrer">127.0.0.1:8000/docs</a>.
      </p>
    </div>
  );
}

export default HomePage;
