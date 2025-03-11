const Balance = require("../models/BalanceModel");

//get user balance
exports.getBalance = async (req, res, next) => {
    try {
        const balance = await Balance.getBalance();
        res.status(200).send(balance);
    } catch (error) {
        next(error);
    }
};

// get cash transactions history
exports.getCashTransactions = async (req, res, next) => {
    try {
        const { start, end } = req.params;
        const results = await Balance.getCashTransactions(start, end);
        res.status(200).send(results);
    } catch (error) {
        next(error);
    }
};

// correct balance
exports.correctBalance = async (req, res, next) => {
    try {
        const data = req.body;
        const io = req.io;
        const user = req.user;

        await Balance.correctBalance(data);

        // emit socket
        io.emit("cashBalanceUpdated", user);

        res.status(201).json({
            message: "Balance has been updated successfully!",
        });
    } catch (error) {
        next(error);
    }
};

//get all users balance
exports.getAllUsersBalance = async (req, res, next) => {
    try {
        const balance = await Balance.getAllUsersBalance();
        res.status(200).json(balance);
    } catch (error) {
        next(error);
    }
};
