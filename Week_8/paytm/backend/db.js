const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:u4aAj4xkj2QZfoap@cluster0.npomqzy.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    // username:{
    //     type: String,
    //     required: true,
    //     trim: true,
    //     lowercase: true,
    //     minLength:3,
    //     maxLength:30
    // },
    // password:{
    //     type:String,
    //     required: true,
    //     minLength:6,
    // },
    // firstname:{
    //     type: String,
    //     required:true,
    //     trim: true,
    //     maxLength:50
    // },
    // lastname:{
    //     type: String,
    //     required: true,
    //     trim: true,
    //     maxLength: 50
    // }
    username:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
        
    },
    firstname:{
        type:String,
        require: true
        
    },
    lastname:{
        type:String,
        require: true
        
    }
});

const User = mongoose.model("User",userSchema);


// Account schems
const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,     // Reference to usermodel
        ref:'User',
        required: true,
    },
    balance:{
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };
