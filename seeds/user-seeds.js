const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [{
        username: 'Response200',
        email: 'response200@gmail.com',
        password: 'password123'
    },
    {
        username: 'Bootcamp',
        email: 'bootcamp@gmail.com',
        password: 'password123'
    },
    {
        username: 'FullStack',
        email: 'fullstack@gmail.com',
        password: 'password123'
    },
    {
        username: 'Influencer',
        email: 'influencer@gmail.com',
        password: 'password123'
    },
    {
        username: 'AdmL',
        email: 'adml@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;