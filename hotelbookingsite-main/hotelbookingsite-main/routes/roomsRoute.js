const express = require("express");
const router = express.Router();


const Room = require("../models/room");


router.post("/getroombyid",async(req,res)=>{
    
    try{
        const roomid = req.body.roomid;
        const room = await Room.findOne({_id:roomid});
        return res.send(room);
    }catch(error){
        return res.status(400).json({message:error});
    }
    

})

router.get("/getallrooms",async(req,res)=>{

    try{
        const rooms = await Room.find({});
        return res.send(rooms);
    }catch(error){
        return res.status(400).json({message:error});
    }
    

})



module.exports = router;