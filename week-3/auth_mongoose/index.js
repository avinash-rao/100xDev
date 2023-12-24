const mongoose = require('mongoose');
const express = require("express");

const app = express();
app.use(express.json());

const jwtPassword = "123456";

mongoose.connect('mongodb+srv://Cluster21172:SE8r7r7pkaFMBLnC@cluster21172.css5ukv.mongodb.net/user_app?retryWrites=true&w=majority');

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/signup', async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const userExists = await User.findOne({ email: username });
    if (userExists) {
        return res.status(400).send('Username already exists');
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save();
    res.json({
        message: "User created successfully"
    });
});

app.listen(3000, () => {
    console.log('App started at port 3000');
})