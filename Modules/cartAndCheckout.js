const { Router } = require('express');
const app = Router();
const fs = require('fs/promises');
const path = require('path')
const logThis = require('./logger');



app.get('/experience/default_basket', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '../db/at_process_basket.json');
      const data = await fs.readFile(filePath, 'utf8');

      let headres = JSON.stringify(req.headers);
      const jsonData = JSON.parse(data);

      await logThis(headres, "default_basket");
  
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/process/Basket_Process', async (req, res) => {
    try {
      const filePath = path.join(__dirname, './db/Basket_Process.json');
      const data = await fs.readFile(filePath, 'utf8');

      let headres = JSON.stringify(req.headers);
      const jsonData = JSON.parse(data);

      await logThis(headres, "default_basket - Process");
  
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.get('/process/BasketJustAfterConversionFromCartToCheckout', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '../db/Basket_Just_after_conversion_from_cart_to_checkout.json');
      const data = await fs.readFile(filePath, 'utf8');

      let headres = JSON.stringify(req.headers);
      const jsonData = JSON.parse(data);

      await logThis(headres, "BasketJustAfterConversionFromCartToCheckout - Process");
  
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = app;