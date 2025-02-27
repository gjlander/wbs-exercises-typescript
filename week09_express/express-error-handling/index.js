import express from 'express';
import { readFile } from 'fs';

import errorHandler from './middleware/errorHandler.js';
import ErrorResponse from './utils/ErrorResponse.js';
import asyncHandler from './utils/asyncHandler.js';

const app = express();

app.get('/', (req, res, next) => {
    Promise.resolve()
        .then(() => {
            throw new Error('BROKEN');
        })
        .catch(next); // Errors will be passed to Express.
});

app.get('/error-from-callback', (req, res, next) => {
    readFile('/maybe-valid-file', 'utf-8', (err, data) => {
        if (err) {
            return next(err);
        }
        return res.send(data);
    });
});
app.get('/error-from-promise', async (req, res, next) => {
    try {
        throw new ErrorResponse('Something went wrong', 400);
    } catch (err) {
        next(err);
    }
});

app.get(
    '/error-from-promise-handler',
    asyncHandler(async (req, res, next) => {
        throw new ErrorResponse('oopsie poopsie', 400);
    })
);

app.use(errorHandler);

app.listen(3000, () =>
    console.log('Server is running on http://localhost:3000')
);
