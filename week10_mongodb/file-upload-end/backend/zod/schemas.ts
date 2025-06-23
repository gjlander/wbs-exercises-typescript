import { z } from 'zod/v4';

// const arrayToString = z.tuple([z.string().min(1)]).transform(str => str[0]);
// const emailToString = z.tuple([z.email('Invalid email.')]).transform(str => str[0]);

const userSchema = z.object({
  firstName: z.tuple([z.string().min(1, 'First name is required')]).transform(str => str[0]),
  lastName: z.tuple([z.string().min(1, 'Last name is required')]).transform(str => str[0]),
  email: z.tuple([z.email('Invalid email.')]).transform(str => str[0]),
  image: z
    .url({
      protocol: /^https?$/,
      hostname: z.regexes.domain
    })
    .optional()
});

// const formFieldsSchema = z.object({
//   firstName: z.tuple([z.string()]).transform(str => str[0]),
//   lastName: z.tuple([z.string()]).transform(str => str[0]),
//   email: z.tuple([z.string()]).transform(str => str[0])
// });

type ZodUserSchema = z.infer<typeof userSchema>;

export { userSchema, /*formFieldsSchema,*/ type ZodUserSchema };
