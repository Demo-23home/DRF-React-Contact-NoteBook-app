# DRF-React-ContactTask

This is a Django Rest Framework (DRF) and React project with an authentication system using JWT. The project involves CRUD operations on a Contact model, with additional features like search functionality in the frontend.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [CRUD Operations](#crud-operations)
- [Search Functionality](#search-functionality)
- [Redis Caching System](#redis-caching-system)
  

## Project Overview

Provide a brief description of the project, its purpose, and the technologies used.


## Installation

Include instructions on how to set up the project locally. This may include cloning the repository, installing dependencies, and any necessary configuration.

```bash
git clone https://github.com/Demo-23home/DRF-React-ContactTask.git
cd DRF-React-ContactTask
```
# Usage

## Docker
This project has been Dockerized for easy deployment. To run the project using Docker, follow these steps:

1- Build the Docker images:

```bash
docker-compose build

```
2- Access the application at http://127.0.0.1:80 for the Django backend and http://127.0.0.1:8000/(api || contacts ) for the React frontend.
3- Access Swagger for API documentation at http://127.0.0.1:8000.
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
