import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/test', (req, res) => {
    res.send('Hi Test')
})

app.listen(port, () => {
    console.log('Start : port = ', port)
})