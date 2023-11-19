import * as z from 'zod';

export const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: 'Maximum of 3 characters' })
      .max(40, { message: 'Maximum of 40 characters' }),
    lastName: z.string().min(3).max(40),
    email: z.string().min(5).max(30).email({
      message: 'Must be a valid email',
    }),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
    }),
    password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

export type FormSchemaType = z.infer<typeof FormSchema>;

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  username: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  username: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: 'Minimum 5 characters.' })
    .max(2200, { message: 'Maximum 2,200 caracters' }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(1, { message: 'This field is required' })
    .max(1000, { message: 'Maximum 1000 characters.' }),
  tags: z.string(),
});

export const BasicUserSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be 2 or more characters long' }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: 'Username must be 4 or more characters long' }),
  email: z.string().email().trim().toLowerCase(),
  phone: z.string().min(10, { message: 'Phone numbers are a minimum of 10 digits' }),
  // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
  // .length(10, { message: "Ten numbers are required" })
  // .transform(val => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`),
  //website: z.string().trim().toLowerCase().url().optional(),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: 'URLs must be a minimum of 5 characters' })
    .refine(val => val.indexOf('.') !== -1, { message: 'Invalid URL' })
    .optional(),
  company: z.object({
    name: z.string().trim().min(5, { message: 'Company name must be 5 or more characters long' }),
    catchPhrase: z.string().optional(),
  }),
});

const UserAddressSchema = z.object({
  street: z.string().trim().min(5, { message: 'Street must be 5 or more characters long' }),
  suite: z.string().trim().optional(),
  city: z.string().trim().min(2, { message: 'City must be 2 or more characters long' }),
  zipcode: z.string().regex(/^\d{5}(?:[-\s]\d{4})?$/, {
    message: 'Must be 5 digit zip. Optional 4 digit extension allowed.',
  }),
});

const UserAddressSchemaWithGeo = UserAddressSchema.extend({
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
});

const HasIDSchema = z.object({ id: z.number().int().positive() });

export const UserFormSchemaWithAddress = BasicUserSchema.extend({ address: UserAddressSchema });

export const UserSchemaWithAddress = UserFormSchemaWithAddress.merge(HasIDSchema);

export const UserSchemaWithGeo = BasicUserSchema.extend({
  address: UserAddressSchemaWithGeo,
}).merge(HasIDSchema);

export type UserFormWithAddress = z.infer<typeof UserFormSchemaWithAddress>;

export type UserWithAddress = z.infer<typeof UserSchemaWithAddress>;

export type UserWithGeo = z.infer<typeof UserSchemaWithGeo>;
