const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const jsonParser = (bodyParser.json())


app.listen(port, () => {
    
    console.log(`server is running on port ${port}`)
    
    app.get('/tweets', (req, res) => {
        
        res.status(200).json({
            error: false,
            tweets: []
        })
    })
    
    app.post('/tweet/new', jsonParser, (req, res) => {
        
        console.log(req.body)
        res.status(200).json({
            error: false,
            msg: 'created!'
        })
        
    })
    
    app.delete('/tweet/:id/delete', jsonParser, (req, res) => {
        console.log(req.params.id)
        res.status(200).json({
            error: false,
            msg: `tweet ${req.params.id} is deleted!`,
        })
    })
})
