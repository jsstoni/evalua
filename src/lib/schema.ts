import { z } from 'zod';

export const createForm = z.object({
  title: z.string().nonempty('Es necesario un título para la prueba'),
  content: z.string().optional(),
});

export type MakeForm = z.infer<typeof createForm>;
