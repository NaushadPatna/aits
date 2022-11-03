const mongoose = require('mongoose');
//creating Database
mongoose.connect("mongodb://localhost:27017/aitsdynamic", {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedToplogy: true
}).then(() => {
    console.log("Connection Successfully");
}).catch((error) => {
    console.log(error);
});