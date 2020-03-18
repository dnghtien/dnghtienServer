const express = require('express');
const router = express.Router();
const accountcontroller = require('../controller/account_controller');

router.post('/add-account', accountcontroller.addAccount);

router.get('/show-account', accountcontroller.showAccount);

router.get('/account/:id', accountcontroller.singleAccount);

router.patch('/account-update', accountcontroller.updateAccount);

router.delete('/remove-account/:id', accountcontroller.deleteAccount);

module.exports = router;