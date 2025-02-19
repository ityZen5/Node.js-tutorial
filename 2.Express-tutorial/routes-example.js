const express = require('express')
const app = express();

//root route
app.get('/', (req, res) => {
    res.send('Welcome to Homepage')
})

//get all products
app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label: "product1"
        },
        {
            id: 2,
            label: "product2"
        },
        {
            id: 3,
            label: 'product3'
        }]
    res.json(products);
})

//get a single product (dynamic api route using : )
app.get('/products/:productId', (req, res) => {
    const productId = parseInt(req.params.productId)
    const products = [
        {
            id: 1,
            label: "product1"
        },
        {
            id: 2,
            label: "product2"
        },
        {
            id: 3,
            label: 'product3'
        }]

    const getSingleProduct = products.find((product) => product.id === productId)

    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).send('product not found, pls send with different id')
    }
})
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})