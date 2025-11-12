const { Router } = require('express');

const preordersRouter = Router();

preordersRouter.route('/:id').get('/preorders/:id');

module.exports = preordersRouter;
