
var fs = require('fs')

fs.readFile('node.txt', 'utf8', function (err, data) {
  if (err) return
  console.log(data)
})

fs.unlink('node.txt', (err) => {
  console.log(err)
})


const http = require('http')

http.createServer(function(req, res) {
  res.write('Hello World!')
  res.end()
}).listen(8080)