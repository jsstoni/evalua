'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FileText } from 'lucide-react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { createForm, type MakeForm } from '@/lib/schema';
import { AddQuestion } from './add-question';
import Editor from './editor';
import { Question } from './question';

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
        <div className="flex items-start gap-8">
          <div className="sticky top-4 flex flex-col gap-1 rounded-lg border bg-card p-1">
            <AddQuestion appendAction={append} />
          </div>
          <div className="test flex flex-1 flex-col gap-2 border bg-card p-6">
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

            <div className="flex flex-col gap-4">
              {fields.map((field, index) => (
                <Question index={index} key={field.id} removeAction={remove} />
              ))}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
