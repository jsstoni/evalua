'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCheck,
  FileText,
  ListChecks,
  type LucideIcon,
  PencilLine,
  PlusCircle,
  Save,
} from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { AddQuestion } from '@/app/(web)/make/_components/add-question';
import Editor from '@/app/(web)/make/_components/editor';
import { Questions } from '@/app/(web)/make/_components/questions';
import { Field } from '@/components/form/field';
import { HoverInfo } from '@/components/hover-info';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
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
  const form = useForm<MakeForm>({
    resolver: zodResolver(createForm),
    defaultValues: {
      title: '',
      content: '',
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions',
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="test relative flex flex-1 flex-col gap-2 border bg-card p-6">
          <div className="flex items-center gap-2">
            <FileText size={32} strokeWidth={0.5} />
            <Field
              className="flex-1"
              control={form.control}
              name="title"
              render={(field) => (
                <Input
                  className="border-0 bg-transparent px-0 shadow-none"
                  placeholder="Objetivo de la prueba"
                  id="title"
                  {...field}
                />
              )}
            />
          </div>

          <Editor control={form.control} />

          <Questions fields={fields} removeAction={remove} />

          <div className="sticky bottom-4 mx-auto mt-4 flex gap-px self-start rounded-lg border bg-card p-1.5 shadow-lg">
            <Popover>
              <HoverInfo title="Añadir pregunta">
                <PopoverTrigger asChild>
                  <Button type="button" variant="ghost">
                    <PlusCircle className="size-7" strokeWidth={1} />
                  </Button>
                </PopoverTrigger>
              </HoverInfo>
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

            <HoverInfo title="Guardar">
              <Button type="submit" variant="ghost">
                <Save className="size-7" strokeWidth={1} />
              </Button>
            </HoverInfo>
          </div>
        </div>
      </form>
    </Form>
  );
}
