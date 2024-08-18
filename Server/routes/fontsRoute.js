const express = require('express')
const fontsRouter = express.Router();
const {uploadFonts} = require('../controllers/fontsContollers')
fontsRouter.post("/api/fonts",uploadFonts)
module.exports = {fontsRouter}