const express = require('express')
const morgan = require('morgan')
const {fontsRouter} = require('./routes/fontsRoute')
const {PrositeRouter} = require('./routes/PrositeRoute.js')
const {stylesRouter} = require('./routes/StylesRoute')
const {ConnectDB} = require('./ConnectDB')


const cors = require('cors');


const app = express();
app.set('view engine','ejs')
const PORT = process.env.PORT || 4000
app.use(cors())
app.use(morgan("dev"))
app.use(express.json());
app.use(fontsRouter)
app.use(PrositeRouter)
app.use(stylesRouter)
ConnectDB();
 app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})