const express = require('express')
const PrositeRouter = express.Router();
const multer = require('multer')

const {prositeControllers} = require('../controllers/prositeControllers.js')

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file)
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})
var upload = multer({storage:storage})
PrositeRouter.post("/prosite",upload.fields([{name:'link'},{name:'bglink'}]),prositeControllers)

module.exports = {PrositeRouter}
