import dotenv from 'dotenv';
import http from 'http';

import app from '../../app';

const server = http.createServer(app);

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
