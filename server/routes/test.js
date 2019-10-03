const express = require('express')
const router = express.Router();
const Test = require('../../data/Test')

router.get('/',async (req,res)=>{
    try{
        const posts = await Test.find();
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
});

router.post('/post',async (req,res)=>{

const post = new Test({
    
name:req.body.name

});
try{
    const savedpost = await post.save();
    res.json(savedpost)
}catch (err){

res.json({message:err})
}



});

module.exports = router;