// const http = require('http');
 
// const server = http.createServer((request,response) => {
//     console.log('Server detected');
//     console.log('header', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);
//     const user = {
//         name: 'Nishanth',
//         age: '15',
//         location: 'Tirupur',
//     }
//     response.setHeader('Content-type', 'text/html')
//     response.end('<h1>Hello</h1>')
//     response.setHeader('Content-type', 'application/json'); // used to pass javascript files 
//     response.end(JSON.stringify(user));
// })

// server.listen(3000)
///(((((((((((((((((((((())))))))))))))))))))))
//EXPRESS
const express = require('express');

const app = express();

//middleware - three arguments request, response, and next 
// app.use ('/profile', (req,res, next) => {
//     console.log(user);
//     next(); // next is required if u want the programme to flow further
// })


app.use(express.urlencoded({extended: false})) // middleware used to make req.body work 
app.use(express.json()); // used to recieve the json sent from the server
//GET
app.get ('/',(req,res) => { // order is imp 
   // res.send('hello');
//    const user = {
//     name: 'Nishanth',
//     age: '15',
//     location: 'Tirupur',
//    }
    res.send('getting root'); // JSON STRINGFY IS NOT REQUIRED, THE LIBRARY CHANGES IT INTERNALLY
} );


app.get ('/profile',(req,res) => { // order is imp 
    res.send('getting profile'); // JSON STRINGFY IS NOT REQUIRED, THE LIBRARY CHANGES IT INTERNALLY
});

//POST
app.post('/profile',(req,res) => { // order is imp 
    console.log(req.body); // req to work, middleware is required
    const user = {
        name: 'Nishanth',
        age: '15',
        location: 'Tirupur',
       }
    res.send(user); // JSON STRINGFY IS NOT REQUIRED, THE LIBRARY CHANGES IT INTERNALLY
})

app.listen('3007');