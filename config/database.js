import {Sequelize} from "sequelize";

const db = new Sequelize('otomatis_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;