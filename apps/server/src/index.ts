import express from 'express';

const app = express()
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send("Testing express backend");
    });

app.listen(port, () => {
    console.log('Server listening at http://localhost:${port}');
});