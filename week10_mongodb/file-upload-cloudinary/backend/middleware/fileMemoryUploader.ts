import multer, { type Options } from 'multer';

//10MB
const fileSize = 10 * 1024 * 1024;

const allowedMimeTypes = ['image/png', 'image/jpeg'];

const fileFilter: Options['fileFilter'] = (req, file, cb) => {
  // To accept the file pass `true`, like so:
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    // You can always pass an error if something goes wrong:
    cb(new Error('Only jpeg or png images are allowed.'));
  }
};

const storage = multer.memoryStorage();

const fileMemoryUploader = multer({ storage, limits: { fileSize }, fileFilter });

export default fileMemoryUploader;
