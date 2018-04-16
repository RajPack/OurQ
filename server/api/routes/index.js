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

router.get('/test', function (req, res) {
    res.send('Its from Amol machine');
    //ControllerQless.GetVendors(res);
})

router.get('/locations', function (req, res) {
    ControllerQless.GetLocations(res);
})


module.exports = router;