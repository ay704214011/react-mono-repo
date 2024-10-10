const express = require('express');
const { getAllItems, getItemById, updateItemById, deleteItemById, createItem } = require('../controllers/item.controller');
const router = express.Router();
const postValidator = require('../validators/items.validator');
const protect = require('../middleware/protect');

router.get('/', getAllItems);
router.post('/', [protect, postValidator(), createItem]);
router.get('/:id', getItemById);
router.put('/:id', updateItemById);
router.delete('/:id', deleteItemById);

module.exports = router;