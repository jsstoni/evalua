'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createForm, type MakeForm } from '@/lib/schema';

export function Create() {
  const form = useForm<MakeForm>({ resolver: zodResolver(createForm) });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <label htmlFor="title">Título de la prueba</label>
      <input
        placeholder="Objetivo de la prueba"
        id="title"
        {...form.register('title', { required: true, pattern: /^[A-Za-z]+$/i })}
      />
    </form>
  );
}
