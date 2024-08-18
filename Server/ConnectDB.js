const mongoose = require('mongoose')
//'mongodb://127.0.0.1/StdHostel'
const ConnectDB = async()=>{
    try {
         await mongoose.connect("mongodb://127.0.0.1/server")
        .then(()=>console.log("Database connectn"))
    } catch (error) {
        console.log(error);
    }
}
module.exports = {ConnectDB}