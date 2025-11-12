const { Router } = require('express');

const phonesRouter = Router();

phonesRouter.route('/').get().post();

phonesRouter.route('/:id').patch().delete();

phonesRouter.route('/year/:year').get().patch().delete();

phonesRouter.get('/more-year/:moreYear');

phonesRouter.get('/avg-ram');

phonesRouter.get('/count-by-brand');

phonesRouter.get('/brand-by-screen/:screenSize');

phonesRouter.get('/:id/preorders');

module.exports = phonesRouter;
