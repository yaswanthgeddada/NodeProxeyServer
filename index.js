const express = require('express');
const app = express();
const PORT = 4000;
const axios = require('axios');
const fs = require('fs/promises');
const path = require('path');
const apiRouter = express.Router();
const cartAndCheckout = require('./Modules/cartAndCheckout');
const orderStatusTracking = require('./Modules/orderStatusTracking');
const quotes = require('./Modules/quotes');
const products = require('./Modules/products');
const reseller = require('./Modules/reseller');






app.use("/api",apiRouter);

apiRouter.use(cartAndCheckout);
apiRouter.use(orderStatusTracking);
apiRouter.use(quotes);
apiRouter.use(products);
apiRouter.use(reseller);




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})