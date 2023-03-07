const express = require ('express');
const router = express.Router();
const {getall,insertlost,deleteone,getOne} = require('../logic/lost');

router.get('/',getall);
router.post('/',insertlost);
router.get('/:id',getOne);
router.delete('/:id',deleteone);
module.exports = router;