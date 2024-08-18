const {Styles} = require('../models/Styles.js')
const styles = async(req,res)=>{
    const {body} = req;
    try {
        const newStyles = await Styles.create(body);
        console.log(newStyles)
        res.send({msg:"Styles data added succesfully"})
    } catch ({error}) {
        console.log(error);
        return res.status(402).send({msg:"Styles cant be uploaded to database"})
    }
    //console.log(body)

}
module.exports = {styles}