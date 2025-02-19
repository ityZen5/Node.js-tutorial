const express = require('express');
const app = express();

//define middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log("This middlware will run on every request")
    next();
}

app.use(myFirstMiddleware)

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