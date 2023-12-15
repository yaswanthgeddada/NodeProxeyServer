const { Router } = require('express');
const app = Router();
const fs = require('fs/promises');
const path = require('path')
const logThis = require('./logger');

app.post('/process/from_quote', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '../db/Basket_Process.json');
      const data = await fs.readFile(filePath, 'utf8');
  
      const jsonData = JSON.parse(data);
  
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = app;