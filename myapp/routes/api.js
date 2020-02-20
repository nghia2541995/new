var express = require('express');
var router = express.Router();
const customerControl = require('../controllers/customer').customerControlObj;


/* GET users listing. */
router.get('/', customerControl.getCustomer);

module.exports = router;
