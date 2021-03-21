var express = require("express");
var router=express.Router();



router.get("/:file",(req,res) => {
    
   res.download(`../Files/${req.params.file}`,'download.jpg', (e)=> {
       if(e) {
           console.log(e);
       }
   });
});

module.exports = router;