'use client';

import { Plus, X } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button } from '@/components/button';
import type { MakeForm } from '@/lib/schema';

export function Answers({ index }: { index: number }) {
  const { control, register } = useFormContext<MakeForm>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options` as const,
  });

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field, indexAnswer) => (
          <div className="relative flex items-center" key={field.id}>
            <input
              placeholder={`Opción ${indexAnswer + 1}`}
              {...register(`questions.${index}.options.${indexAnswer}.answer`)}
            />
            <X
              className="-translate-y-1/2 absolute top-1/2 right-2 size-4 cursor-pointer stroke-gray-500"
              onClick={() => remove(indexAnswer)}
            />
          </div>
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
