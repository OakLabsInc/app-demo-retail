
const oak = require('oak')
const { join } = require('path')

oak.catchErrors()

const express = require('express')
const app = express()

const port = process.env.PORT ? _.toNumber(process.env.PORT) : 9100


let publicPath = join(__dirname, 'public')
let window = null

require('dotenv').config();

app.use(express.static(publicPath))

app.listen(port, function () {
  oak.on('ready', () => loadWindow())
})


function loadWindow () {
  
  window = oak.load({
    url: `http://localhost:${port}/`,
    ontop: false,
    insecure: true,
    flags: ['enable-vp8-alpha-playback'],
    size: "1080x1920",
    sslExceptions: ['localhost'],
    background: '#ffffff',
    scripts: [
      join(__dirname, 'public', 'js', 'env.js'),
    ]
  }).on('ready',function(){
    window.send('env-sent', process.env)
  })

}
