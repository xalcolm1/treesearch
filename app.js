const express = require('express')
const fetch = require('node-fetch')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
require("dotenv").config();




app.get("/api/search",(req, res) => {
      
           fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${req.query.q}`,{
              method: 'GET', 
              mode: 'cors'
              
            } ) 
            .then(response => {
                    if(!response.ok) throw('you did a bad')
                    return response.json()
            }).then(data => {
              res.status(200).json( data )
            })
})


app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
