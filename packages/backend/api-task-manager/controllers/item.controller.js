const { validationResult } = require('express-validator');
const items = require('../mock/items');
const sendResponse = require('../utils/sendResponse');
const sendError = require('../utils/sendError');

const getAllItems = (_, res) => {
    try {
        console.log('item GET controller to fetch all items');
        sendResponse(res, 200, items);
    } catch (e) {
        sendError(res, 404, 'Data Not Found');
    }
};

const getItemById = (req, res) => {
    try {
        console.log('item GET controller to get item by Id');
        const { id } = req.params;
        const filteredItems = items.filter((item) => {
            return item.id === id;
        });
        if (filteredItems && filteredItems.length) {
            sendResponse(res, 200, filteredItems[0]);
        } else {
            sendError(res, 404, '404', 'Data not found');
        }
        
    } catch (e) {
        console.log('e ', e);
        sendError(res, 500, '500', e);
    }
};

const updateItemById = (req, res) => {
    try {
        console.log('item PUT controller to update item by Id');
        const { id } = req.params;
        const index = items.findIndex((item) => {
            return item.id === id;
        });
        if (index > -1) {
            items[index] = req.body;
            sendResponse(res, 200, items[index]);
        } else {
            sendError(res, 404, '404', 'Data not found');
        }
    } catch (e) {
        console.log('e ', e);
        sendError(res, 500, '500', e);
    }
};

const deleteItemById = (req, res) => {
    try {
        console.log('item DELETE controller to delete item by Id');
        const { id } = req.params;
        const index = items.findIndex((item) => {
            return item.id === id;
        });
        if (index > -1) {
            items.splice(index, 1);
            sendResponse(res, 200, null, 'Item deleted successfully');
        } else {
            sendError(res, 404, '404', 'Data not found');
        }
    } catch (e) {
        console.log('e ', e);
        sendError(res, 500, '500', e);
    }
};

const createItem = (req, res) => {
    try {
        console.log('Create item');
        const { title, category, description, id } = req.body;
        const index = items.findIndex((item) => {
            return item.id === id;
        });
        const errors = validationResult(req);
        if (index > -1) {
            sendError(res, 403, '403', 'Duplicate item');
        } else if (!errors.isEmpty()) {
            sendError(res, 400, '400', {
                errors: errors.array()
            });
        } else {
            items.push(req.body);
            sendResponse(res, 201, req.body, 'Item added successfully');
        }
    } catch (e) {
        console.log('e ', e);
        sendError(res, 500, '500', e);
    }
};

module.exports = {
    getAllItems,
    getItemById,
    updateItemById,
    deleteItemById,
    createItem
};