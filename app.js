import express from 'express';
import logger from 'morgan';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(logger('dev'));

app.get('*', (req, res) => {
  res.status(200).send('Welcome to the this amazing class');
});

export default app;
