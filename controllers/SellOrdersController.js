const SellOrder = require("../models/SellOrdersModel");

// add order
exports.addOrder = async (req, res, next) => {
    try {
        const order = req.body;
        const items = order.items;

        delete order.items;

        const order_id = await SellOrder.create(order, items);

        const createdOrder = await SellOrder.getById(order_id);

        res.status(201).send(createdOrder);
    } catch (error) {
        next(error);
    }
};
exports.editOrder = async (req, res, next) => {
    try {
        const order = req.body;
        const items = order.items;
        delete order.items;
        const io = req.io;
        const user = req.user;

        const result = await SellOrder.update(order, items);
        const updatedOrder = await SellOrder.getById(result.insertId);

        // emit socket
        io.emit("sellOrderUpdated", [updatedOrder, user]);

        res.status(201).send(updatedOrder);
    } catch (error) {
        next(error);
    }
};
exports.deleteOrder = async (req, res, next) => {
    try {
        const order_id = req.params.id;
        const io = req.io;
        const user = req.user;

        const deletedOrder = await SellOrder.getById(order_id);

        await SellOrder.delete(order_id);

        // emit socket
        io.emit("sellOrderDeleted", [deletedOrder, user]);

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        next(error);
    }
};
