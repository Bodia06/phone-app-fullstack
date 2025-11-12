const _ = require('lodash');
const { Preorders } = require('../database/models');

module.exports.getPreordersPhonesAllInformation = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.query;

  try {
    const foundPreordersInfo = await Preorders.findOne({
      where: {
        id,
        ...(status ? { status } : {}),
      },
      include: [
        {
          model: Phones,
          attributes: ['brand', 'model', 'year', 'ram', 'screenSize'],
        },
      ],
    });

    if (!foundPreordersInfo) {
      return next(
        createError(
          404,
          `No preorder found with id ${id} and status ${status || 'any'}`
        )
      );
    }

    const preorderData = _.omit(foundPreordersInfo.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(200).send({ data: preorderData });
  } catch (err) {
    next(err);
  }
};
