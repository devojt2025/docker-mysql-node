import express from 'express';
import order from './routes/orderRoutes.js';  

const app = express();

app.use(express.json());
app.use('/api/v1/foodpanda/order', order);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
