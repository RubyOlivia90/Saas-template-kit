import express from 'express';
import { prisma } from './db'; 
import { StripeClient } from '@saas-starter/services'; 

const app = express()
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
      }
    });
    res.json(users);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.send("Testing express backend");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});