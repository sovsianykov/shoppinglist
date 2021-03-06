const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route Get api/items
//@desc Get All Items
//@access public
router.get('/', (req, res) =>{
    Item.find()
        .sort({date: -1 })
        .then(items => res.json(items))
});
// @route POST api/items
//@desc Create a Post
//@access Public
router.post('/', (req, res) =>{
        const newItem = new Item({
            name: req.body.name
        })
    newItem.save()
        .then(item  => res.json(item))
});
// @route DELETE api/items
//@desc DELETE a Post
//@access Public
router.delete('/:id', (req, res) =>{
   Item.findById(req.params.id)
        .then(item  => item.remove)
        .then(() => res.json({success:true}))
       .catch(() => res.status(404).json({success:false}))
})



module.exports = router;