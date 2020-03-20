const Account = require('../model/account_model');

exports.addAccount = (req, res, next) => {
  const account = new Account({
    user: req.body.user,
    password: req.body.password,
    email: req.body.email,
    select: req.body.select,
    mltselect: req.body.mltselect,
    area: req.body.area
  });
  account
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Account added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showAccount = (req, res, next) => {
  Account.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.singleAccount = (req, res, next) => {
  Account.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateAccount = (req, res, next) => {
  Account.findById(req.body.id).then(result => {
    result.user = req.body.user;
    result.password = req.body.password;
    return result.save();
  }).then(account => {
    res.send('Account updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deleteAccount = (req, res, next) => {
  Account.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Account deleted');
    }).catch(err => res.status(400).send(err));
};

exports.exitsAccount = (req, res, next) => {
  Account.find({user:req.body.user, password:req.body.password})
    .then(result => {
      res.send(result);
    })
    .catch(err=>res.status(400).send(err));
}