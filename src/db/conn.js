const mongoose = require('mongoose');
//creating Database

// Connect to DB

// const password = process.env.Rubana101305
const DB = 'mongodb+srv://naushad:Rubana101305@cluster0.adlzck6.mongodb.net/aitspatna.users?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedToplogy: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection Successfully");
}).catch((error) => {
    console.log(error);
});

// mongoose.connect("mongodb://localhost:27017/aitsdynamic", {
//     // useCreateIndex: true,
//     // useNewUrlParser: true,
//     // useUnifiedToplogy: true
// }).then(() => {
//     console.log("Connection Successfully");
// }).catch((error) => {
//     console.log(error);
// });