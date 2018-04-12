var express = require('express');
var router = express.Router();

var ControllerQless = require('../controller/QlessController.js');



router.get('/food/list', function (req, res) {
    //res.send('About this wiki');
    ControllerQless.GetFoodItems(res);
})

router.get('/vendor/list', function (req, res) {
    //res.send('About this wiki');
    ControllerQless.GetVendors(res);
})

module.exports = router;