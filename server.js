const express = require('express')
const nunjucks = require('nunjucks')
const contents = require('./data-contents')

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
    res.render('contents', {contents})
})

server.get('/courses/:id', (req, res)=>{
    const id = req.params.id

    const content = contents.find((content)=>{
        if(content.id == id){
            return true
        }
    })

    if(!content){
        return res.send("Content not found")
    }
    
    return res.render('courses', {content})
    
})

server.use((req, res)=>{
    res.status(404).render('not-found')
})

server.listen(5000, ()=>{
    console.log('Server Running')
})