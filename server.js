import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

// Common ES
// const express = require('express');
// const path = require('path');
// const posts = require('./routes/posts');

// Solution to __dirname is not defined because is in the scope of common ES
// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

// Body parse middleware | Allows us to send form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// If this line is not define, we are gonna get an error like: there is no js/main.js 
app.use(express.static(path.join(__dirname, 'public')))

// Sample Routes
// app.get('/', (req, res) => {
//    // res.send('Hello World')
//    // res.send('<h1>Hello World</h1>')
//    res.send({ message: 'Hello World'})
// })
// app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
// app.get('/about', (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'about.html'))
// }) 

// App Routes
app.use('/api/posts', posts);

// Middleware: Error handler & not found
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));