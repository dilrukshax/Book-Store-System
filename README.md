

# MERN Book Store Application

Welcome to the MERN Book Store application! This is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack along with Tailwind CSS for styling. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Functionality](#functionality)
  - [1. Add Book](#1-add-book)
  - [2. View Books](#2-view-books)
  - [3. Update Book](#3-update-book)
  - [4. Delete Book](#4-delete-book)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **MongoDB**: A NoSQL database used for storing book information.
- **Express.js**: A web application framework for Node.js, used to build the backend.
- **React**: A JavaScript library for building user interfaces, used for the frontend.
- **Node.js**: A JavaScript runtime for building scalable network applications, used for the server.
- **Tailwind CSS**: A utility-first CSS framework for styling the user interface.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for interacting with the database.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making API requests.
- **React Router**: A standard library for routing in React applications.

## Functionality

### 1. Add Book

Users can add a new book to the store by providing the book title, author, genre, and any additional details. The information is stored in the MongoDB database.

### 2. View Books

The application displays a list of all books available in the store. Users can view details such as the title, author, and genre for each book.

### 3. Update Book

Users can edit the information of an existing book. This includes modifying the title, author, genre, or any other details associated with the book.

### 4. Delete Book

If a book is no longer needed, users can delete it from the store. This action permanently removes the book from the database.

## Getting Started

Follow the instructions below to set up and run the MERN Book Store application locally on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dilrukshax/mern-book-store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-book-store
   ```

3. Install dependencies for the server:

   ```bash
   npm install
   ```

4. Navigate to the `frontend` directory and install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm run dev
   ```

2. In a separate terminal, start the client:

   ```bash
   npm run dev
   ```

3. Open your browser and visit [http://localhost:5000](http://localhost:5000) to use the MERN Book Store application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

