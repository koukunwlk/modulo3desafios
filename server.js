const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server
})
2
server.get('/', (req, res)=>{
    res.render('about')
})

server.get('/contents', (req, res)=>{
    res.render('contents')
})

server.use((req, res)=>{
    res.status(404).render('not-found')
})

server.listen(5000, ()=>{
    console.log('Server Running')
})