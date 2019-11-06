import express from 'express';
import logger from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the beginning of awesomeness',
  });
});

let testMessage = '';

app.route('/test')
  .post((req, res) => {
    testMessage = req.body.message;
    res.status(201).json({
      status: 'success',
      message: 'successfully created a message',
      data: testMessage,
    });
  })
  .get((req, res) => {
    if (testMessage) {
      res.status(200).json({
        status: 'success',
        message: 'successfully retrieved the message',
        data: testMessage,
      });
    }
    res.status(400).json({
      status: 'error',
      message: 'error no message found',
    });
  });

export default app;
