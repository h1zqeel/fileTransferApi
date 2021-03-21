var express = require("express");
var router=express.Router();
var fs = require('fs');
// fs.readdir('../Files',(x,f)=>console.log(f[1]));

var dir = '../Files';

fs.readdir(dir, function(err, files){
  files = files.map(function (fileName) {
    return {
      name: fileName,
      time: fs.statSync(dir + '/' + fileName).mtime.getTime()
    };
  })
  .sort(function (a, b) {
    return a.time - b.time; })
  .map(function (v) {
    return v.name; });
});  

router.get("/",function(req,res,next){
    fs.readdir(dir, function(err, files){
        files = files.map(function (fileName) {
          return {
            name: fileName,
            time: fs.statSync(dir + '/' + fileName).mtime.getTime()
          };
        })
        .sort(function (a, b) {
          return b.time - a.time; })
        .map(function (v) {
          return v.name; });
          res.json({fileNames:files})
      });  
    // fs.readdir('../Files',(x,f)=>res.json({fileNames:f}));
   
});

module.exports = router;