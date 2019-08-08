
const express = require('express')
const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ 
    api: 'running',
    jargonOfTheDay: process.env.JOTD
   })
})

module.exports = server