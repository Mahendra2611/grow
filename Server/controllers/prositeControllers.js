const path = require('path')
const fs = require('fs')
const { PrositeSchema } = require('../models/PrositeSchema')
const prositeControllers = async(req,res)=>{
   
    const {link,bglink} = req.files
    
    const premium = JSON.parse(req.body.premium);  
    const name = JSON.parse(req.body.name); 
    const bgpremium = JSON.parse(req.body.bgpremium);  
    const bgname = JSON.parse(req.body.bgname);  
 
    const objimg = link.map((file, index) => ({
      link: fs.readFileSync(path.join(__dirname, '../uploads', file.filename)), 
      premium:(premium[index]=='free'?false:true),  
      name: name[index]       
    }));
    const objbgimg = bglink.map((file, index) => ({
     link: fs.readFileSync(path.join(__dirname, '../uploads', file.filename)), 
     premium:(bgpremium[index]=='free'?false:true),  
     name: bgname[index]      
   }));
 
     const data = {
         bgimg:objbgimg,
         img:objimg
     }
     
     try {
        
         const newImageSchema = await PrositeSchema.create(data);
         console.log("data added")
         res.sendStatus(200);
     } catch ({error}) {
         console.log(error);
         return res.status(400).send({msg:"PrositeSchema cant be uploaded to database"})
     }
 
 }
 module.exports = {prositeControllers}