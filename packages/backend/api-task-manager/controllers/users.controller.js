const sendResponse = require("../utils/sendResponse");
const { fetchUsers } = require('../services/userService');
const sendError = require("../utils/sendError");

const usersController = async (req, res, next) => {
    try {
        const data = await fetchUsers();
        sendResponse(res, 200, data);
    } catch (e) {
        console.log('e ', e);
        sendError(res, 500, 500, 'Internal Server Error');
    }
    
};

module.exports = {
    usersController
};