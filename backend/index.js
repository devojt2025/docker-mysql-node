import express from 'express';
import order from './routes/orderRoutes.js';
import ipWhitelistChecker from './middleware/ipWhitelistChecker.js';
import http from 'http';
import {Server} from "socket.io";
import cors from 'cors';
const app = express();

const server = http.createServer(app);

const socket = new Server(server, {
  cors: {
    origin: "*"
  }
})

app.use(cors());
app.use((req, res, next) => {
  req.io = socket;
  next();
})


app.use(express.json());
app.use(ipWhitelistChecker);
app.use('/api/v1/foodpanda', order);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
