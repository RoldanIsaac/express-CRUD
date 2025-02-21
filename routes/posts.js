import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postsController.js';
const router = express.Router(); 

// Get All
router.get('/', /* logger , Example of middleware in a single request*/ getPosts);

// Get One
router.get('/:id', getPost);

// Create
router.post('/', createPost);

// Update
router.put('/:id', updatePost);

// Delete
router.delete('/:id', deletePost);

export default router;
// module.exports = router; 