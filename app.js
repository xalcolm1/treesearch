const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
require("dotenv").config();




app.get("/api/search", async (req, res) => {
          try{
            let response = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${req.query.q}`,
            {
              method: 'GET', 
              mode: 'cors'
              
            } ) .then(res => {
              console.log(res)
                    if(!res.ok) throw('skgf')
                    return res.json()})
               
  //           .then(res => res.json())
  //           .then(data => console.log(data.items))
            const results = await response.json()
            res.status(200).json({
                 results
            })
          } catch(err){
            res.status(500).json({
              message: err
          })
          }
	
		
})


app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
