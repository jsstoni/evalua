'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCheck,
  FileText,
  ListChecks,
  type LucideIcon,
  PencilLine,
} from 'lucide-react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { AddQuestion } from '@/app/(web)/make/_components/add-question';
import Editor from '@/app/(web)/make/_components/editor';
import { Questions } from '@/app/(web)/make/_components/questions';
import { createForm, type MakeForm, type QuestionType } from '@/lib/schema';

type QuestionOption = {
  type: QuestionType;
  icon: LucideIcon;
};

export const question: Record<QuestionType, string> = {
  'multiple-choice': 'Multiples opciones',
  'true-false': 'Verdadore o falso',
  essay: 'Ensayo',
};

const questionOption: QuestionOption[] = [
  { type: 'multiple-choice', icon: ListChecks },
  { type: 'true-false', icon: CheckCheck },
  { type: 'essay', icon: PencilLine },
];

export function Create() {
  const form = useForm<MakeForm>({ resolver: zodResolver(createForm) });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions',
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <div className="test relative flex flex-1 flex-col gap-2 border bg-card p-6">
          <div className="flex items-center gap-1 font-bold">
            <FileText size={32} strokeWidth={0.5} />
            <input
              className="border-0 bg-transparent"
              placeholder="Objetivo de la prueba"
              id="title"
              {...form.register('title', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </div>

          <Editor control={form.control} />

          <Questions fields={fields} removeAction={remove} />

          <div className="sticky bottom-4 mx-auto mt-4 flex gap-1.5 self-start rounded-lg border bg-card p-1.5 shadow-lg">
            {questionOption.map((option) => (
              <AddQuestion
                type={option.type}
                appendAction={append}
                key={option.type}
              >
                <option.icon strokeWidth={1.2} />
              </AddQuestion>
            ))}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
