const Item = require('../models/Item');

module.exports.getAll = (req,res) => {
    Item.find({})
    .then(item => {
        if(!item) return res.status(400).json({message: 'No Records Found'});

        return res.status(200).json(item);
    })
}