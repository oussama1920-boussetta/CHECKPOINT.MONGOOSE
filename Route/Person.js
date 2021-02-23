const  express = require('express')
const router=express.Router();
const Person=require('../models/Person')



router.post('/',(req,res)=>{
const newperson=new Person({...req.body})
newperson.save().then(Person=>res.send(Person))
.catch(err=>res.send(err))
})
module.exports=router