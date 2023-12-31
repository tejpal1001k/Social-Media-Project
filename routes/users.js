const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const postController = require('../controllers/posts_controller');
router.get('/profile', usersController.profile);
router.get('/posts', postController.posts);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);


module.exports = router;