
var fs = require('fs');

//Blog server Functions
function GetFoodItemsFile (callback) {
    fs.readFile('./api/db/FoodItems.json', 'utf8', callback);
};

function GetVendorsFile (callback) {
    fs.readFile('./api/db/vendors.json', 'utf8', callback);
};

function GetLocationssFile (callback) {
    fs.readFile('./api/db/Location.json', 'utf8', callback);
};


module.exports.GetFoodItems = function(res){
    
    var obj;
    GetFoodItemsFile(function(err, data){
        if(err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
    });
}

module.exports.GetVendors = function(res){
    
    var obj;
    GetVendorsFile(function(err, data){
        if(err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
    });
}

module.exports.GetLocations = function(res){
    
    var obj;
    GetLocationssFile(function(err, data){
        if(err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
    });
}