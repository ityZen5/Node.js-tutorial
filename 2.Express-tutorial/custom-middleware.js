const express = require('express');
const app = express();

const requestTimeStampLogger = (req, res, next) =>{
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimeStampLogger)

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About page")
})

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})