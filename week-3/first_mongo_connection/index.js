const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Cluster21172:SE8r7r7pkaFMBLnC@cluster21172.css5ukv.mongodb.net/userdummymongoose?retryWrites=true&w=majority');

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({
    name: 'Avinash Rao',
    email: 'avinash@gmail.com',
    password: '123'
})

user.save()
