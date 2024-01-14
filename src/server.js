import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Helllo Docker !' });
});

app.listen(port, () => {
  console.log('server listening at: http://localhost:3000');
});
