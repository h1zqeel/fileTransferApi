var express = require("express");
var router=express.Router();
const sharp = require('sharp');


router.get("/:file",(req,res) => {
    sharp(`../Files/${req.params.file}`).resize(340, 272).toFile('../Thumbs/'  + req.params.file, (err, resizeImage) => {
        if (err) {
            console.log(err);
        } else {
            res.download(`../Thumbs/${req.params.file}`,'download.jpg', (e)=> {
                   e
                 });
        }
    });
    
});
  
    // sharp(`../Files/${req.params.file}`).resize(30,50).toBuffer().then(thumb => {
    //     res.download(thumb,'thumb.jpg', (e) =>{
    //         e
    //     }).catch(e=>{console.log(e)});
    //     // res.download(`../Files/${req.params.file}`,'download.jpg', (e)=> {
    //     //     e
    //     // });
    // });


  


module.exports = router;