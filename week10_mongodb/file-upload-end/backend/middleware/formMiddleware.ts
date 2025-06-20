import { type RequestHandler } from 'express';
import formidable from 'formidable';
import type { Fields, Files, File, Part } from 'formidable';

declare module 'express-serve-static-core' {
  interface Request {
    image?: File;
  }
}

//10MB
const maxFileSize = 10 * 1024 * 1024;

const filter = ({ mimetype }: Part) => {
  if (!mimetype || !mimetype.includes('image')) throw new Error('Only images are allowed', { cause: 400 });
  return true;
};

const formMiddleWare: RequestHandler = (req, res, next) => {
  const form = formidable({ filter, maxFileSize });

  form.parse(req, (err: any, fields: Fields, files: Files) => {
    if (err) {
      next(err);
    }
    const body: Record<string, string> = {};

    for (const field in fields) {
      // formidable has fields as array of strings
      if (Array.isArray(fields[field])) body[field] = fields[field][0];
    }
    if (!files || !files.image) throw new Error('Please upload a file.', { cause: 400 });
    // console.log(files.image[0].filepath);
    req.body = body;
    req.image = files.image[0];
    next();
  });
};

export default formMiddleWare;
