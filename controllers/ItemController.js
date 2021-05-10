const Item = require('../models/Item');

module.exports.getAll = (req,res) => {
    Item.find({})
    .then(item => {
        if(!item) return res.status(400).json({message: 'No Records Found'});

        return res.status(200).json(item);
    })
}

module.exports.getById =  (req,res) => {
  
    Item.find({_id:req.params.id})
    .then(item => {
        console.log(item.length);
        if(item.length<1) 
        {
            return res.status(400).json({message: 'No Records Found'})
        }else{
            return res.status(200).json(item);
        }

    })
}
