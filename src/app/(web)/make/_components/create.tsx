'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCheck,
  FileText,
  ListChecks,
  type LucideIcon,
  PencilLine,
  PlusCircle,
} from 'lucide-react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { AddQuestion } from '@/app/(web)/make/_components/add-question';
import Editor from '@/app/(web)/make/_components/editor';
import { Questions } from '@/app/(web)/make/_components/questions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { createForm, type MakeForm, type QuestionType } from '@/lib/schema';

export const questionTitle: Record<QuestionType, string> = {
  'multiple-choice': 'Multiples opciones',
  'true-false': 'Verdadore o falso',
  essay: 'Ensayo',
};

export const questionIcons: Record<QuestionType, LucideIcon> = {
  'multiple-choice': ListChecks,
  'true-false': CheckCheck,
  essay: PencilLine,
};

const questionOptions = (
  Object.entries(questionIcons) as [QuestionType, LucideIcon][]
).map(([type, icon]) => ({ type, icon }));

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
            <Input
              className="border-0 bg-transparent shadow-none"
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
            <Popover>
              <Tooltip>
                <PopoverTrigger asChild>
                  <TooltipTrigger asChild>
                    <Button type="button" variant="ghost">
                      <PlusCircle className="size-7" strokeWidth={1} />
                    </Button>
                  </TooltipTrigger>
                </PopoverTrigger>

                <TooltipContent>Añadir pregunta</TooltipContent>
              </Tooltip>
              <PopoverContent className="flex w-auto flex-col p-2" side="top">
                {questionOptions.map((option) => (
                  <AddQuestion
                    type={option.type}
                    appendAction={append}
                    key={option.type}
                  >
                    <option.icon />
                    {questionTitle[option.type]}
                  </AddQuestion>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
