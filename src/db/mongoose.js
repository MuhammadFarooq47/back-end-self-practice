const mongoose = require('mongoose');

// password selfpractice
mongoose.connect('mongodb+srv://selfpractice:selfpractice@cluster0.xnwor.mongodb.net/self-practice-database?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
    }).then(() => {
    console.log("Connection Sucessfull");
}).catch((e) => {
    console.log(`Server get an Error ${e.message}`)
});

// module.exports = 

