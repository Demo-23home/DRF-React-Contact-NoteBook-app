# DRF-React-ContactTask

Welcome to DRF-React-ContactTask! This project combines Django Rest Framework (DRF) and React to create a web application with a robust authentication system utilizing JWT (JSON Web Tokens). The primary focus of the project is to facilitate CRUD (Create, Read, Update, Delete) operations on a Contact model, offering additional features such as a search functionality seamlessly integrated into the frontend.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [CRUD Operations](#crud-operations)
- [Search Functionality](#search-functionality)
- [Redis Caching System](#redis-caching-system)
- [Dockerization](#dockerization)
- [API Documentation](#api-documentation)
  

## Project Overview
- **CRUD Operations**: The system supports Create, Read, Update, and Delete operations on the Contact model, providing a comprehensive interface for managing contact information.

- **Search Functionality**: The frontend is equipped with a search feature, allowing users to efficiently find and retrieve relevant contact information.


## Installation

Include instructions on how to set up the project locally. This may include cloning the repository, installing dependencies, and any necessary configuration.

```bash
git clone https://github.com/Demo-23home/DRF-React-ContactTask.git

cd DRFReactContactTask
```
# Usage

## Docker
This project has been Dockerized for easy deployment. To run the project using Docker, follow these steps:

1- Build the Docker images:

```bash
 docker-compose up --build
```
2- Access the application at http://127.0.0.1:80 for the React forntend UI, and Django backend is reached through http://127.0.0.1:8000/( api || contacts ).
3- Access Swagger for API documentation at http://127.0.0.1:8000, and full Swagger docs at http://127.0.0.1:8000/docs.

## Authentication

The authentication system in this project is implemented using JSON Web Tokens (JWT). JWTs are used to securely transmit information between parties as a JSON object. In the context of this project, the JWT tokens are employed to authenticate and authorize users. Here's a brief overview of how the authentication works:

1. **User Authentication:** When a user successfully logs in, the server generates a JWT token containing the user's information and signs it using a secret key.

2. **Token Transmission:** The JWT token is then sent to the client, and the client stores it (usually in a cookie or local storage).

3. **Subsequent Requests:** For subsequent requests that require authentication, the client includes the JWT token in the request header. The server validates the token, and if it's valid, processes the request.

This mechanism provides a stateless and secure way to handle user authentication in the project.

## CRUD Operations

### Create
- **Endpoint:** `POST /contacts/`
- **Description:** Create a new contact by sending a POST request to the specified endpoint with the required data.

### Read
- **List Contacts:**
  - **Endpoint:** `GET /contacts/`
  - **Description:** Retrieve a list of all contacts.

- **Get Contact by ID:**
  - **Endpoint:** `GET /contacts/{id}/`
  - **Description:** Retrieve details of a specific contact by providing its ID.

### Update
- **Update Contact by ID:**
  - **Endpoint:** `PUT /contacts/{id}/`
  - **Description:** Update a contact by sending a PUT request to the specified endpoint with the updated data.

- **Partial Update Contact by ID:**
  - **Endpoint:** `PATCH /contacts/{id}/`
  - **Description:** Perform a partial update on a contact by sending a PATCH request with the modified fields.

### Delete
- **Delete Contact by ID:**
  - **Endpoint:** `DELETE /contacts/{id}/`
  - **Description:** Delete a contact by providing its ID in a DELETE request.

## Search Functionality

The frontend implements search functionality to allow users to find specific contacts easily. The search functionality can be utilized by providing a search query in the designated input field. Here's an example:

```markdown
#For postman
1. Choose Bearer Token from Authentication and then enter the token
2. Enter the search query in the search bar.
3. Press the search button or hit Enter.

#For Frontend
1. Sign in and then go to Contacts Page
2. Choose List and then type the search parmater
3. The frontend sends a request to the server with the search query.
4. The server processes the request and returns the relevant search results.
5. The frontend displays the search results to the user.
```

### Redis Caching System
Redis has been integrated into this project as a caching system to enhance performance. The system caches data for 30 seconds, allowing frequently requested data to be stored in memory and reducing the need to retrieve it from the database repeatedly.

## Technologies Used
The project leverages a variety of technologies to ensure its functionality and efficiency. Here's a list of the key technologies and their respective versions:

- **asgiref==3.7.2**
- **async-timeout==4.0.3**
- **certifi==2023.11.17**
- **charset-normalizer==3.3.2**
- **coreapi==2.3.3**
- **coreschema==0.0.4**
- **Django==5.0.1**
- **django-cors-headers==4.3.1**
- **django-rest-swagger==2.2.0**
- **djangorestframework==3.14.0**
- **djangorestframework-jwt==1.11.0**
- **djangorestframework-simplejwt==5.3.1**
- **drf-yasg==1.21.7**
- **gunicorn==21.2.0**
- **idna==3.6**
- **inflection==0.5.1**
- **itypes==1.2.0**
- **Jinja2==3.1.3**
- **MarkupSafe==2.1.3**
- **openapi-codec==1.3.2**
- **packaging==23.2**
- **pillow==10.2.0**
- **PyJWT==1.7.1**
- **python-dotenv==1.0.0**
- **pytz==2023.3.post1**
- **PyYAML==6.0.1**
- **redis==5.0.1**
- **requests==2.31.0**
- **simplejson==3.19.2**
- **sqlparse==0.4.4**
- **typing_extensions==4.9.0**
- **uritemplate==4.1.1**
- **urllib3==2.1.0**

## Dockerization
The project is Dockerized, streamlining the deployment process. To run the application using Docker, refer to the detailed instructions provided in the README.

## API Documentation
Explore the API documentation conveniently using Swagger at **127.0.0.1:8000**, and access detailed Swagger Docs at **127.0.0.1:8000/docs**.


