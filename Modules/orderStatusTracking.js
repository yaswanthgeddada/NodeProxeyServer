const { Router } = require('express');
const app = Router();
const fs = require('fs/promises');
const path = require('path')
const logThis = require('./logger');

app.post("/api/ElasticSearchPost", async (req, res) => {
    try {
      const apiUrl = 'http://localhost:3000/EsRes'; 
      const response = await axios.get(apiUrl);
      
      const responseData = response.data;
      
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });


module.exports = app;