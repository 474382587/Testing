const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3000
const jsonParser = (bodyParser.json())

const ENCODING = "utf8";

const uuid = require('uuid')


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

app.get('/tweets', (req, res) => {

    // fs.readdir('./data', (err, files) => {

    //     if (err) console.log('error occured')

    //     const arr = []
    //     for (let i = 0; i < files.length; i++) {
    //         console.log(files[i])
    //         const dir = './data/' + files[i]
    //         console.log(dir)
    //         fs.readFile(dir, 'utf8', function (err, data) {
    //             if (err) return
    //             console.log(data)
    //             arr.push(JSON.parse(data))
    //             if (i === files.length - 1) {
    //                 res.status(200).json({
    //                     error: false,
    //                     tweets: arr
    //                 })
    //             }
    //         })
    //     }

    // })

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




// app.post('/tweet/new', jsonParser, (req, res) => {

//     console.log(req.body)
//     res.status(200).json({
//         error: false,
//         msg: 'created!'
//     })

// })
app.post('/tweets', jsonParser, (req, res) => {
    const { content } = req.body

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
                fs.writeFileSync(`./data/${fileName}.json`, content, ENCODING)
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

    // fs.readdir('./data', (err, files) => {

    //     if (err) console.log('error occured')

    //     files.forEach(file => {
    //         if (file === `${fileName}.json`) {
    //             res.status(400).json({
    //                 error: true,
    //                 msg: 'already exist'
    //             })
    //         }
    //     })


    //     const fileContent = [{

    //     }]
    //     fs.writeFile(`./data/${fileName}.json`, fileContent, encoding, (err) => {
    //         if (err) throw err;

    //         console.log("The file was succesfully saved!");
    //     });


    // })




})
// app.post('/tweet/new', jsonParser, (req, res) => {

//     console.log(req.body)
//     res.status(200).json({
//         error: false,
//         msg: 'created!'
//     })

// })

// app.delete('/tweet/:id/delete', jsonParser, (req, res) => {
//     console.log(req.params.id)
//     res.status(200).json({
//         error: false,
//         msg: `tweet ${req.params.id} is deleted!`,
//     })
// })





app.put('/tweets/:fileName', jsonParser, (req, res) => {

    const { content } = req.body
    const fileName = req.params.fileName


    try {
        fs.writeFileSync(`./data/${fileName}.json`, content, ENCODING)
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