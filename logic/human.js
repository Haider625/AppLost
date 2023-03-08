const HUMAN = require('../model/human');

module.exports = {
    gethuman : async (req, res) => {
        const human = await HUMAN.find();
        res.json(human)
    },
    inserthuman :async (req,res)=>{
        const human =await new HUMAN({
            name: req.body.name,
            country: req.body.country,
            lssuer: req.body.lssuer,
            YersLost: req.body.YersLost,
            PhoneNumber: req.body.PhoneNumber,
            note: req.body.note
        }).save()
        if (human){
         res.status(200).json({"human" : human});
        }else{
            res.status(404).json({message : "human is erorr"});
        } 
        
    },
    deleteone : async (req,res) => {
        const Id = req.params.id;
        const del = await HUMAN.findByIdAndDelete(Id);
        res.json({"delete" : del})
    },
    getOne : async (req, res) => {
        const Id = req.params.id;
        const Get = await HUMAN.findById(Id);
        if (Get){
            res.status(200).json({"human" : Get});
           }else{
               res.status(404).json({message : "human is erorr"});
           }
    },
}