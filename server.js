import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
// const express = require('express');
// const path = require('path');
// const posts = require('./routes/posts');

const app = express();

// Body parse middleware | Allows us to send form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger)

const port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname, 'public')))

// Solution to __dirname is not defined
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sample Routes

// app.get('/', (req, res) => {
//    // res.send('Hello World')
//    // res.send('<h1>Hello World</h1>')
//    res.send({ message: 'Hello World'})
// })

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'about.html'))
}) 

// App Routes
app.use('/api/posts', posts);


// Middleware: Error handler & not found
app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => console.log(`Server is running on port ${port}`));