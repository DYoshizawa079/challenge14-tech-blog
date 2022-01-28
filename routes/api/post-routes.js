const router = require('express').Router();

// Load the Post model
const Post = require('../../models/Post');

// Get all posts
router.get('/', (request, response) => {
    Post.findAll({

        // Retrive all columns that was specified in the Post model
        attributes: [
            'id',
            'author',
            'title',
            'content'
        ]
    })
    // Process the response from DB call
    .then(retrievedData => response.json(retrievedData))
    .catch(error => {
        response.status(500).json(error);
    });
});

// Get a single post
router.get('/:id', (request, response) => {
    Post.findOne({

        // Search parameters/conditions
        where: {
            id: request.params.id
        },

        // Retrive all columns that was specified in the Post model
        attributes: [
            'id',
            'author',
            'title',
            'content'
        ]
    })
    // Process the response from DB call
    .then(retrievedData => response.json(retrievedData))
    .catch((err) => {
        response.status(500).json(err);
    });
});

// Post a single post
router.post('/', (request, response) => {
    /* Input expects a JSON object that's similar to the following format:
    {
        'author': '',
        'title': '',
        'content': ''
    } 
    */

    Post.create({
        author: request.body.author,
        title: request.body.title,
        content: request.body.content
    })
    // Process the JSON input
    .then(jsonInput => response.json(jsonInput))
    .catch(error => {
        response.status(500).json(error);
    });
});

// Update a single post
router.put('/:id', (request, response) => {
    Post.update(
        // As of now, only the text content can be updated
        // Enter the content as a JSON object
        {
            content: request.body.content
        },
        // Set search/query conditions
        {
            where: { id: request.params.id }
        }
    )
    // Process the JSON input
    .then(jsonInput => {
        if(!jsonInput) {
            res.status(404).json({message: 'No post found with this id'});
            return;
        }
        // If the corresponding post is found, a "1" will be returned to verify that 1 row has changed in the last query
        response.json(jsonInput);
    })
    .catch(error => {
        response.status(500).json(error);
    });
});

// Delete a post
router.delete('/:id', (request, response) => {
    Post.destroy({
        where: { id: request.params.id }
    })
    // Process the delete operation
    .then(selectedPost => {
        if(!selectedPost) {
            res.status(404).json({ message: "Can't find a post with that ID" });
            return;
        }
        response.json(selectedPost);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;