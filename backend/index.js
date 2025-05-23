import express from 'express';
import order from './routes/orderRoutes.js';
import ipWhitelistChecker from './middleware/ipWhitelistChecker.js';
import http from 'http';
import { Server } from "socket.io";
import cors from 'cors';
const app = express();

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "*", // or better: ['https://domain.com']
    methods: ["GET", "POST"],
  }
});

// Optional: socket event handlers
io.on('connection', (socket) => {
  console.log('Client connected');
});
app.use(cors());
app.use((req, res, next) => {
  req.io = io;
  next();
})


app.use(express.json());
app.use(ipWhitelistChecker);
app.use('/api/v1/foodpanda', order);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
