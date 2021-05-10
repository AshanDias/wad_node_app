const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors");
const mongoose = require("mongoose")

dotenv.config();
const port = process.env.PORT
const  dbUrl = process.env.DB_URL
const app = express()
app.use(cors())
app.use(express.json())

const authRoutes = require('./routes/auth')

app.use('/api',authRoutes);

app.get('/', (req, res) => {
  res.send('initial setup')
})

mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
  })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})