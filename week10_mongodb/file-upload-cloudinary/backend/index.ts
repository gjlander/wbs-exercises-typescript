import express from 'express';
import cors from 'cors';
import './db.js';
import fileUploader from './middleware/fileUploader.js';
import fileMemoryUploader from './middleware/fileMemoryUploader.js';
import cloudUploader from './middleware/cloudUploader.js';
import errorHandler from './middleware/errorHandler.js';
import Duck from './models/Duck.js';
import { type RequestHandler } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));

app.use('/files', express.static('files'));

const uploadController: RequestHandler = (req, res) => {
  if (!req.file) throw new Error('Please upload a file', { cause: 400 });
  res.status(200).json({
    location: `http://localhost:8080/files/${req.file.filename}`
  });
  // return res.status(200).json({
  //     location: `${req.protocol}://${req.get('host')}/files/${
  //         req.file.filename
  //     }`,
  // });
};

app.post('/file-upload', fileUploader.single('image'), uploadController);

app.post('/file-upload-cloud', fileMemoryUploader.single('image'), cloudUploader, async (req, res) => {
  const newDuck = await Duck.create({
    ...req.body,
    imgUrl: req.cloudinaryURL
  });

  res.status(200).json(newDuck);
});

app.use('/*splat', (req, res) => {
  throw new Error('Not Found', { cause: 404 });
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
