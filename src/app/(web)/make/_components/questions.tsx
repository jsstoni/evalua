'use client';

import { Trash } from 'lucide-react';
import {
  type FieldArrayWithId,
  type UseFieldArrayRemove,
  useFormContext,
} from 'react-hook-form';
import { question } from '@/app/(web)/make/_components/create';
import type { MakeForm } from '@/lib/schema';

export function Questions({
  fields,
  removeAction,
}: {
  fields: FieldArrayWithId<MakeForm, 'questions', 'id'>[];
  removeAction: UseFieldArrayRemove;
}) {
  const { register } = useFormContext<MakeForm>();

  if (fields.length <= 0) {
    return <p className="text-center font-medium text-2xl">No hay preguntas</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <div key={field.id}>
          <div className="flex items-center gap-2">
            <input
              className="rounded-none border-0 border-b"
              placeholder={`Pregunta ${index + 1}`}
              {...register(`questions.${index}.ask`)}
            />
            <input
              className="w-20 rounded-none border-0 border-b"
              type="number"
              placeholder="puntos"
              {...register(`questions.${index}.points`, {
                valueAsNumber: true,
              })}
            />
            <Trash onClick={() => removeAction(index)} />
          </div>
          <small>{question[field.type]}</small>
        </div>
      ))}
    </div>
  );
}
