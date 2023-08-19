//1. import dependencies
const express = require("express")
const app = express()
const cors = require("cors")

//2. config
require("./config/mongoose.config")
app.use(express.json(), express.urlencoded({extended: true}))
app.use(cors())

//3. routes
const Routes = require("./routes/author.routes")
Routes(app)

//4. listen to port
app.listen(8000, () => console.log("listening to port 8000"))