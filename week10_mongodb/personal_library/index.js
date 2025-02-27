import express from 'express';

import './db/index.js';
import userRouter from './routes/userRoutes.js';
import bookRouter from './routes/bookRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// usual middleware
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
