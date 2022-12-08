require('dotenv').config()
const express = require('express')
const workoutsRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutsRoutes)

//connect do DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    //listening to port
    app.listen(process.env.PORT, () => {
    console.log('Connected to DB & Server is running on port 4000')
})
    })
    .catch((error) => {
        console.log(error)
    })

