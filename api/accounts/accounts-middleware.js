const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.name) {
    next({ status: 422, message: 'Need a name' });
  } else {
    next();
  }
}

// exports.checkAccountNameUnique = (req, res, next) => {
//   // DO YOUR MAGIC
// }

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getById(req.params.id);
    if (account) {
      req.account = account; // saves other middlewarws a db trip
      next();
    } else {
      next({ status: 404, message: 'not found!' });
    }
  } catch (error) {
    next(error);
  }
}
