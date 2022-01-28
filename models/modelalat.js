import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;
const dbmonitoring = db.define('db_pm_cm',{
    kode_alat:{
        type: DataTypes.STRING
    },
    nama_alat:{
        type: DataTypes.STRING
    },
    jenis_alat:{
        type: DataTypes.STRING
    },
    pm_alat_1:{
        type: DataTypes.STRING
    },
    cm_alat_1:{
        type: DataTypes.STRING
    },
    pm_alat_2:{
        type: DataTypes.STRING
    },
    cm_alat_2:{
        type: DataTypes.STRING
    },
    pm_alat_3:{
        type: DataTypes.STRING
    },
    cm_alat_3:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default dbmonitoring