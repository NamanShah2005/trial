import express from "express"

const hostname = "127.0.0.1";
const port = 3000;

const app = express()

app.get("/" , (req,res) => {
    res.send("nice working")
})

app.listen(port , hostname , () => {
    console.log(`The server is working at http://${hostname}:${port}/`)
})