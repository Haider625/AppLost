const express = require('express');
const router = express.Router();
const {gethuman,getOne,inserthuman,deleteone} = require('../logic/human');

router.get('/',gethuman);
router.post('/',inserthuman);
router.delete('/:id',deleteone);
router.get('/:id',getOne);
module.exports=router;