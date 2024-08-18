const express = require('express')
const stylesRouter = express.Router();
const {styles} = require('../controllers/StylesControllers')
stylesRouter.post("/api/styles",styles)
module.exports = {stylesRouter}