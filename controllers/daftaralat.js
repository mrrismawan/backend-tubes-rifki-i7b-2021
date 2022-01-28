import dbmonitoring from "../models/modelalat.js";

export const getAllAlat = async (req, res) => {
    try {
        const Alat = await dbmonitoring.findAll();
        res.json(Alat);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getAlatById = async (req, res) => {
    try {
        const db_pm_cm = await dbmonitoring.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(db_pm_cm[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createAlat = async (req, res) => {
    try {
        await dbmonitoring.create(req.body);
        res.json({message: "Alat ditambahkan"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateAlat = async (req, res) => {
    try {
        await dbmonitoring.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({message: "Alat diperbarui"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteAlat = async (req, res) => {
    try {
        await dbmonitoring.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({message: "Alat dihapus"});
    } catch (error) {
        res.json({message: error.message});
    }
}