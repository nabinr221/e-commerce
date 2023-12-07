const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./dbConnect/connection');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const brandRoute = require('./routes/brandRoute');
const productRoute = require('./routes/productRoute');
const featureRoute = require('./routes/feature');
const colorsRoute = require('./routes/colorsRoute');

require('dotenv').config();
app.use(express.json());
app.use(cors());
connectDb();

app.get('/', (req, res) => {
  const host = req.get('host');
  const protocol = req.protocol;
  const path = `${protocol}://${host}`;
  console.log('Localhost path:', path);
  res.send('Hello, World!');
});

app.use('/', userRoute);
app.use('/categories', categoryRoute);
app.use('/brands', brandRoute);
app.use('/products', productRoute);
app.use('/features', featureRoute);
app.use('/colors', colorsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
