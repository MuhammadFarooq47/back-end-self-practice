const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
    firstname: {
        type : String,
        require : true
    },
    lastname: {
        type: String,
        require : true
    },

    email: {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true,
        unique : true
    }

});

const Register = new mongoose.model('Register', registrationSchema);
module.exports = Register;