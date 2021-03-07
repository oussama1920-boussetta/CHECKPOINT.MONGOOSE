const express = require('express')
const connectDB = require('./config/connectDB')

// const { use } = require('./Route/Person')



const app = express()
app.use(express.json())
app.use('/api/person', require('./Route/Person'))

connectDB();



const community = Person.create([
    { name: "marwen", age: 26, favouriteFoods: ["pasta", "pizza"] },
    { name: "Hedi", age: 59, favouriteFoods: ["lasagne", "potatoes"] },
    { name: "aymen", age: 27, favouriteFoods: ["broccoli", "orange"] },
    { name: "karim", age: 28, favouriteFoods: ["cake", "bananas"] },
    { name: "nadhir", age: 23 }
])


Person.find({ name: "oussama" }, function (err, res) {
    if (res) {
        console.log(res)
    } else {
        console.log(err)
    }
})


Person.findOne({ favouriteFoods: "pasta" }, function (err, res) {
    if (res) {
        console.log(res)
    } else
        console.log(err)
});

Person.findById("6035570c3e7eab24d0465973", function (err, res) {
    res ? console.log(res) : console.log(err)
});

Person.findByIdAndUpdate("6035570c3e7eab24d0465973", function () { favouriteFoods.push("Hamburger") }, function (err, res) {
    res ? console.log(res) : console.log(err)
})

Person.findOneAndUpdate({ name: "Hedi" }, { age: 10 }, { new: true }, function (err, res) {
    res ? console.log(res) : console.log(err)
})

Person.findByIdAndRemove("6035570c3e7eab24d0465975", function (err, res) {
    res ? console.log(res) : console.log(err)
})


Person.remove({ name: "nadhir" }, function (err, res) {
    res ? console.log(res) : console.log(err) 
})

Person.find(
    { favouriteFoods: "burrito" }).
    sort({ name: 1 }).
    limit(2).
    select({ age: 10 }).
    exec(function (err, data) {
        data ? console.log(data) : console.log(err)
    });

app.use(express.static('public'));
app.listen(8000, () => console.log('ssssss')) 
