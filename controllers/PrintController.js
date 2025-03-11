const Print = require("../models/PrintModel");

exports.openCashDrawer = async (req, res, next) => {
    try {
        const message = await Print.openCashDrawer();
        res.status(200).json(message);
    } catch (error) {
        next(error);
    }
};
