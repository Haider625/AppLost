const LOST = require('../model/lost');

module.exports = {
    getall : async (req, res) => {
        const lost = await LOST.find();
        if (lost){
            res.status(200).json({"lost" : lost})
        }else{
            res.status(404).json({Message : "lost_get not working"})
        }
    },
    insertlost : async (req,res) =>{
        const lost = await new LOST({
            name: req.body.name,
            country: req.body.country,
            typeLost: req.body.typeLost,
            lssuer: req.body.lssuer,
            YersLost: req.body.YersLost,
            PhoneNumber: req.body.PhoneNumber,
            note: req.body.note
        }).save()
        if (lost){
            res.status(200).json({"lost" : lost})
        }else{
            res.status(404).json({Message : "lost_insert not working"})
        }
    },
    deleteone : async (req,res) => {
        const Id = req.params.id;
        const del = await LOST.findByIdAndDelete(Id);
        if (del){
            res.status(200).json({"lost" : del})
        }else{
            res.status(404).json({Message : "lost_delet not working"})
        }
    },
    getOne : async (req, res) => {
        const Id = req.params.id;
        const Get = await LOST.findById(Id);
        if (Get){
            res.status(200).json({"lost" : lost})
        }else{
            res.status(404).json({Message : "lost_getone not working"})
        }
    },
}