const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3000
const jsonParser = (bodyParser.json())
const axios = require('axios')
const ENCODING = "utf8";

const uuid = require('uuid')
app.set('view engine', 'pug')


const readFile = (fileName, dir) => {
    try {
        const result = fs.readFileSync(`${dir}${fileName}`, ENCODING)
        if (!!result) {
            return result
        }
        return ''
    } catch (error) {
        console.log(error)
        return null
    }
}
app.get('/', (req, res) => {
    
    axios.get('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json').then(response => {
        // console.log(123, response[0])
        // res.json(response.data)
        console.log(typeof response)
        console.log(Object.keys(response))
        
        res.render('index', { data: response.data })
    })
    // res.render('index', { title: "123" })
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.get('/tweets', (req, res) => {


    try {
        const tweets = []
        const files = fs.readdirSync('./data')
        files.forEach(file => {
            const result = readFile(file, './data/')
            if (result !== null) {
                tweets.push(result)
            }
        })
        res.status(200).json({
            tweets
        })


    } catch (error) {
        res.status(404).json({
            error: true
        })
    }





})

app.post('/tweets', jsonParser, (req, res) => {
    const { content } = req.body || ''

    const fileName = uuid.v4()
    try {
        const files = fs.readdirSync('./data')
        const duplicated = files.reduce((acc, cur) => {
            return acc || (cur === fileName)
        }, false)
        if (duplicated) {
            res.status(404).json({
                error: true,
                msg: 'something is wrong'
            })
        } else {
            try {
                fs.writeFileSync(`./data/${fileName}.json`, JSON.stringify({
                    content: content
                }), ENCODING)
                res.status(200).json({
                    error: false,
                    fileName: `${fileName}.json`
                })
            } catch (error) {
                res.status(500).json({
                    error: true,
                    msg: 'something is wrong on our side'
                })
            }
        }
    } catch (error) {
        res.status(404).json({
            error: true
        })
    }





})






app.put('/tweets/:fileName', jsonParser, (req, res) => {

    const { content } = req.body
    const fileName = req.params.fileName


    try {
        fs.writeFileSync(`./data/${fileName}.json`, JSON.stringify({
            content: content
        }), ENCODING)
        res.status(200).json({
            error: false,
            msg: 'content updated!'
        })
    } catch (error) {
        res.status(404).json({
            error: true,
            msg: 'cannot find such file'
        })
    }



})

app.delete('/tweets/:fileName', jsonParser, (req, res) => {
    const fileName = req.params.fileName
    try {
        fs.unlinkSync(`./data/${fileName}.json`)
        res.status(200).json({
            error: false,
            msg: 'content deleted!'
        })
    } catch (error) {
        res.status(404).json({
            error: true,
            msg: 'cannot delete such file'
        })
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})