const { Router } = require('express');
const { preordersControllers } = require('../controllers');

const preordersRouter = Router();

preordersRouter
  .route('/:id')
  .get(preordersControllers.getPreordersPhonesAllInformation);

module.exports = preordersRouter;
