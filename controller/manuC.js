const ordermodel = require('../model/manu');

exports.manu = async (req, res) => {
    try {
        req.body.img = req.file.filename;
        const order = await ordermodel.create(req.body);
        res.status(201).json({
            status: 'Success',
            message: 'Order created successfully',
            data: order,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message,
        });
    }
};
exports.show = async (req, res) => {
    try {
        const data = await ordermodel.find()

        res.status(200).json({
            status: 'Success',
            message: 'Transactions retrieved successfully',
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedOrder = await ordermodel.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({
                status: 'Fail',
                message: 'Order not found',
            });
        }
        res.status(200).json({
            status: 'Success',
            message: 'Order deleted successfully',
            data: deletedOrder
        });
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error.message,
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedOrder = await ordermodel.findByIdAndUpdate(id, req.body)

        res.status(200).json({
            status: 'Success',
            message: 'Order updated successfully',
            data: updatedOrder
        });
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error.message,
        });
    }
};
