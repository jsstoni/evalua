'use client';

import { Plus, X } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Field } from '@/components/form/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { MakeForm } from '@/lib/schema';

export function Answers({ index }: { index: number }) {
  const { control } = useFormContext<MakeForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options` as const,
  });

  return (
    <>
      <div className="grid items-start gap-4 md:grid-cols-2">
        {fields.map((field, indexAnswer) => (
          <Field
            className="flex-1"
            control={control}
            name={`questions.${index}.options.${indexAnswer}.answer`}
            key={field.id}
            render={(field) => (
              <div className="relative flex items-center [&[aria-invalid='true']_input]:border-destructive">
                <Input placeholder={`Opción ${indexAnswer + 1}`} {...field} />
                <X
                  className="-translate-y-1/2 absolute top-1/2 right-2 size-4 cursor-pointer stroke-gray-500"
                  onClick={() => remove(indexAnswer)}
                />
              </div>
            )}
          />
        ))}
      </div>
      <Button
        className="self-start"
        type="button"
        variant="ghost"
        onClick={() => append({ answer: '' })}
      >
        <Plus /> Agregar opción
      </Button>
    </>
  );
}
