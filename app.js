const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const itemsRoutes = require('./routes/itemsRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect('mongodb://localhost:27017/CRUD', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);


app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
