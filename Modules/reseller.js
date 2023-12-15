const { Router } = require('express');
const app = Router();
const fs = require('fs/promises');
const path = require('path')
const logThis = require('./logger');




app.get('/experience/resellerProfileSys', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '../db/resellerProfileSys.json');
      const data = await fs.readFile(filePath, 'utf8');

      let headres = JSON.stringify(req.headers);
      const jsonData = JSON.parse(data);

      await logThis(headres, "resellerProfileSys");
  
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.get('/experience/resellerProfileValue', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '../db/resellerProfileValue.json');
      const data = await fs.readFile(filePath, 'utf8');

      let headres = JSON.stringify(req.headers);
      const jsonData = JSON.parse(data);

      await logThis(headres, "resellerProfileValue");
  
      res.json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = app;
