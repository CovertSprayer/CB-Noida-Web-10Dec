const UserModel = require('./models/User');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/learning-mongoose')
    .then(()=> console.log('DB Connected!'))
    .catch(err => console.log(err))


async function createUser(name, email, contact){
    // const user = new UserModel({name, email, contact});
    // await user.save();

    const user = await UserModel.create({name, email, contact})
    console.log('User created successfully!');
}

async function createUserInBulk(users){
    await UserModel.create(users)
    console.log('Users created successfully!');
}

const users = [
    {name: 'Aryan1', email: 'shubham@gmail.com1', contact: '9090909090'},
    {name: 'Aryan2', email: 'shubham@gmail.com2', contact: '9090909090'},
    {name: 'Aryan3', email: 'shubham@gmail.com3', contact: '9090909090'},
    {name: 'Aryan4', email: 'shubham@gmail.com4', contact: '9090909090'},
    {name: 'Aryan5', email: 'shubham@gmail.com5', contact: '9090909090'},
]

// createUser('Aryan', 'shubham@gmail.com', '9090909090');
// createUserInBulk(users);

async function getUsers(){
    // const users = await UserModel.find({email: 'shubham@gmail.com'});
    const users = await UserModel.findOne({email: 'shubham@gmail.com'});
    console.log(users);
}

// getUsers();

async function updateUsers(filter, data){
    // const user = await UserModel.updateOne(filter, data);
    const user = await UserModel.updateMany(filter, data);
    console.log(user);
}

// updateUsers({name: "Shubham"}, {contact: "9999999999"});

async function deleteUsers(filter){
    // const response = await UserModel.deleteOne(filter);
    const response = await UserModel.deleteMany(filter);
    console.log(response);
}

// deleteUsers({email: "shubham@gmail.com"})

/**
 * id = '2138217398sjhsdhfks'
 * model.findById(id)
 * model.findByIdAndUpdate(id, {})
 * model.findByIdAndDelete(id)
 * 
 */