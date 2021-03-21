var express = require("express");
var router=express.Router();
var fs = require('fs');
// fs.readdir('../Files',(x,f)=>console.log(f[1]));

var dir = '../Files';

var path = require('path');
var EXTENSION = '.jpg';
router.get("/",function(req,res,next){
    fs.readdir(dir, function(err, files){
        const jpgFiles = files.filter(el => /\.jpg$/.test(el))
        files = jpgFiles.map(function (fileName) {
            
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