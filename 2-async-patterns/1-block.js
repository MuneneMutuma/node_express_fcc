const http  = require('http');

const server = http.createServer((req, res) =>{

    if(req.url=='/'){
       return res.end('Home Page')
    }
    if(req.url=='/about'){
        // BLOCKING CODE!!!
        for (let i = 0; i<10; i++){
            for(let j=0; j<10; j++){
                console.log(`${i} ${j}`)
            }
        }
       return res.end('About Page');
    }
    res.end('Error Page');
})

server.listen(5000,() => {
    console.log('Server Listening on port 5000...')
})  