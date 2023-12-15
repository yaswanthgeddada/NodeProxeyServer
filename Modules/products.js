const { Router } = require('express');
const app = Router();
const fs = require('fs/promises');
const path = require('path')
const logThis = require('./logger');




app.post('/api/experience/productFacets', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '../db/product_facets_response.json');
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


  module.exports = app;