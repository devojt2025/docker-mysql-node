import express from 'express';
import order from './routes/orderRoutes.js';  
import ipWhitelistChecker from './middleware/ipwhitelistchecker.js';

const app = express();

app.use(express.json());
app.use(ipWhitelistChecker);
app.use('/api/v1/foodpanda/', order);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
