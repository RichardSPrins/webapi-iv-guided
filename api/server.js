
const express = require('express')
const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ 
    api: 'running',
    jargonOfTheDay: process.eventNames.JOTD
   })
})

module.exports = server