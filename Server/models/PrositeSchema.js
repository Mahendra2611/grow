const mongoose = require('mongoose')
const Prositeschema = new mongoose.Schema({
    bgimg: [
      {
        link: { type: Buffer },
        premium: { type: Boolean },
        name: [{ type: String }]
      }
    ],
    img: [
      {
        link: { type: Buffer },
        premium: { type: Boolean },
        name: [{ type: String }]
      }
    ],
  });

  const PrositeSchema = mongoose.model("PrositeSchema",Prositeschema)
  module.exports = {PrositeSchema}