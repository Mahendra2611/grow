const {Font} = require('../models/Font.js')
const uploadFonts = async(req,res)=>{
    const {body} = req;
    try {
        const newFont = await Font.create(body);
        console.log(newFont)
        res.send({msg:"font data added succesfully"})
    } catch ({error}) {
        console.log(error);
        return res.status(402).send({msg:"Data cant be uploaded to database"})
    }
    //console.log(body)

}
module.exports = {uploadFonts}