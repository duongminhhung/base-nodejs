const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('base_node', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    logging: false,
});

const connection = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connection()