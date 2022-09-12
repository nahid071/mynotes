const express = require("express")
// const path = require("path")
const colors = require("colors")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const { errorHandler } = require("./middleware/errorMiddleware")

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("API is running ...")
})

app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
