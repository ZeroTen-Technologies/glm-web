const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 8080;


app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'pages/login.html'));
// });

// app.get('/register', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'pages/register.html'));
// });

app.get('/login', (req, res) => {
  res.status(200).end();
});

app.get('/logout', (req, res) => {
  res.status(200).end();
});

app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Problem');
})

server.listen(port , ()=>{
  console.log("Server running on port : " + port);
  console.log('Press Ctrl+C to quit.');
})
 
 
