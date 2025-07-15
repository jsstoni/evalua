import { z } from 'zod';

export const createForm = z.object({
  title: z.string().nonempty('Es necesario un título para la prueba'),
  content: z.string().optional(),
  questions: z.array(
    z.object({
      type: z.enum(['multiple-choice', 'true-false', 'essay']),
      ask: z.string().nonempty('Completa la pregunta'),
      points: z.number(),
      options: z.array(
        z.object({ answer: z.string().nonempty('Completa la respuesta') }),
      ),
    }),
  ),
});

export type MakeForm = z.infer<typeof createForm>;

export type QuestionType = MakeForm['questions'][number]['type'];
