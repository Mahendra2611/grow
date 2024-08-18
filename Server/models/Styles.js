const mongoose = require('mongoose')
const Styless = new mongoose.Schema({
    buttoncolor: { type: String },
    backgroundColor: { type: String },
    color: { type: String },
    premium: { type: Boolean, default: false },
  });

  const Styles = mongoose.model("Styles",Styless);
  module.exports = {Styles}