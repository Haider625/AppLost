const HUMAN = require('../model/human');

module.exports = {
    gethuman : async (req, res) => {
        const human = await HUMAN.find();
        if (human){
            res.status(200).json({"human" : human});
           }else{
               res.status(404).json({message : "human_get is erorr"});
           }
    },
    inserthuman :async (req,res)=>{
        const human =await new HUMAN({
            name: req.body.name,
            country: req.body.country,
            gender : req.body.gender,
            waiting_place: req.body.waiting_place,
            YersLost: req.body.YersLost,
            PhoneNumber: req.body.PhoneNumber,
            note: req.body.note
        }).save()
        if (human){
         res.status(200).json({"human" : human});
        }else{
            res.status(404).json({message : "human_insert is erorr"});
        } 
        
    },
    deleteone : async (req,res) => {
        const Id = req.params.id;
        const del = await HUMAN.findByIdAndDelete(Id);
        if (del){
            res.status(200).json({"human" : del});
           }else{
               res.status(404).json({message : "human_delet is erorr"});
           }
    },
    getOne : async (req, res) => {
        const Id = req.params.id;
        const Get = await HUMAN.findById(Id);
        if (Get){
            res.status(200).json({"human" : Get});
           }else{
               res.status(404).json({message : "human_getOne is erorr"});
           }
    },
}