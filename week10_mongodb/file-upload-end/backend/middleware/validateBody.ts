import { type Request, type Response, type NextFunction } from 'express';
import { z } from 'zod/v4';

const validateBody = (zodSchema: z.ZodObject<any, any>) => (req: Request, res: Response, next: NextFunction) => {
  const { data, error } = zodSchema.safeParse(req.body);
  if (error) {
    next(new Error(z.prettifyError(error), { cause: 400 }));
  } else {
    req.body = data;
    next();
  }
};

export default validateBody;
