import { type ZodUserSchema } from '../zod/schemas';

export {}; // Ensure this file is treated as a module
declare global {
  namespace Express {
    interface Request {
      sanitizedBody?: ZodUserSchema;
    }
  }
}
