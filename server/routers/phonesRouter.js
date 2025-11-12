const { Router } = require('express');
const { paginates, upload } = require('../middleware');
const { phonesControllers } = require('../controllers');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(paginates.paginatePhones, phonesControllers.getPhones)
  .post(phonesControllers.createPhone);

phonesRouter
  .route('/:id')
  .patch(phonesControllers.updatePhone)
  .delete(phonesControllers.deletePhone);

phonesRouter
  .route('/year/:year')
  .get(phonesControllers.getAllPhonesByYear)
  .patch(phonesControllers.updateAllPhonesQuelityYear)
  .delete(phonesControllers.deleteAllPhonesByYear);

phonesRouter.get(
  '/more-year/:moreYear',
  phonesControllers.getAllPhonesMoreThanYear
);

phonesRouter.get('/avg-ram', phonesControllers.avgRamAllPhones);

phonesRouter.get('/count-by-brand', phonesControllers.countPhonesByBrands);

phonesRouter.get(
  '/brand-by-screen/:screenSize',
  phonesControllers.brandByMaxScreenSize
);

phonesRouter.get(
  '/:id/preorders',
  phonesControllers.getPreordersPhonesByPnonesId
);

phonesRouter.patch(
  '/:id/images',
  upload.uploadPhoneImages,
  phonesControllers.updatePhoneImages
);

module.exports = phonesRouter;
