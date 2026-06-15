const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/shopApp';

const Product = require('./models/Product');

let dbConnection;

function connectToDatabase() {
    if (!dbConnection) {
        dbConnection = mongoose.connect(MONGO_URI)
            .then(() => {
                console.log('MongoDB connected');
            })
            .catch((err) => {
                dbConnection = null;
                console.error('MongoDB connection error:', err);
                throw err;
            });
    }

    return dbConnection;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.get('/get-products', async (req, res) => {
    try {
        await connectToDatabase();
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Product fetch error:', error);
        res.status(500).json({ message: 'Server could not get products' });
    }
});

app.post('/add-product', async (req, res) => {
    try {
        await connectToDatabase();
        const { name, price, image, description } = req.body;
        const product = new Product({ name, price, image, description });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error('Product save error:', error);
        res.status(500).json({ message: 'Product was not saved' });
    }
});

app.post('/add-post', (req, res) => {
    const { title, content } = req.body;
    console.log('Post received', title, content);
    res.status(200).send({ message: 'Post saved' });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server started: http://localhost:${PORT}`);
    });
}

module.exports = app;
