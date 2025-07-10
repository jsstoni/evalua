'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { createForm, type MakeForm } from '@/lib/schema';
import Editor from './editor';

export function Create() {
  const form = useForm<MakeForm>({ resolver: zodResolver(createForm) });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="test border bg-card p-4">
      <form className=" flex flex-col gap-2" onSubmit={onSubmit}>
        <div className="flex items-center gap-1 font-bold">
          <FileText size={42} strokeWidth={0.5} />
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
      </form>
    </div>
  );
}
