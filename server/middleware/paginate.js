module.exports.paginatePhones = (req, res, next) => {
  const { page = 3, results = 4 } = req.query;

  req.paginare = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  next();
};
