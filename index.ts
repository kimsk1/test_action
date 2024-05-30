import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/test', (req, res) => {
    res.send('Hi Test')
})

app.get('/test2', (req, res) => {
    res.send('Hi Test2')
})

app.get('/test3', (req, res) => {
    res.send('Hi Test3')
})

app.get('/test4', (req, res) => {
    res.send('Hi Test4')
})

app.listen(port, () => {
    console.log('Start : port = ', port)
})

