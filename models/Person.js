const mongoose =require('mongoose')
const personSchema= mongoose.Schema(
    {
        name :{type:String,require:true} ,

        age :{type:Number,require:true},

        favoriteFoods:{type:String,require:true} ,
    }
)
module.exports=Person=mongoose.model('person',personSchema)