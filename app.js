import express from 'express';
import logger from 'morgan';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to this class',
  });
});

export default app;
