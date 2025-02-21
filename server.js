import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
// const express = require('express');
// const path = require('path');
// const posts = require('./routes/posts');

const app = express();

// Body parse middleware | Allows us to send form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname, 'public')))

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

app.listen(8000, () => console.log(`Server is running on port ${port}`));