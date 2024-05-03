
const express = require('express')
const cors = require('cors')
const userRoute = require("./routes/user.route")
const newsRoute = require("./routes/news.route")

const app = express()

const corsOptions = {
    origin: 'http://localhost:4200' // Allow only this origin to access
  }
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/v1/user", userRoute)
app.use("/api/v1/news-post", newsRoute)






// require('crypto').randomBytes(64, function(err, buffer) {
//     var token = buffer.toString('hex');
//     console.log(token)
//   });

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/models/index.html")
})

app.use((req, res, next)=>{
    res.status(404).json({message: "route not found ", status: 404})
    })
    // server when not connect then will show 
app.use((err, req, res, next)=>{
    res.status(500).json({message: err.message, status: 500})
    })
module.exports = app
