'use client';

import { Trash } from 'lucide-react';
import {
  type FieldArrayWithId,
  type UseFieldArrayRemove,
  useFormContext,
} from 'react-hook-form';
import { Answers } from '@/app/(web)/make/_components/answers';
import { Field } from '@/components/form/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { MakeForm } from '@/lib/schema';
import { questionIcons } from './create';

export function Questions({
  fields,
  removeAction,
}: {
  fields: FieldArrayWithId<MakeForm, 'questions'>[];
  removeAction: UseFieldArrayRemove;
}) {
  const { control, register } = useFormContext<MakeForm>();

  if (fields.length <= 0) {
    return (
      <p className="text-center font-medium text-2xl text-muted-foreground">
        No hay preguntas
      </p>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-4">
      {fields.map((field, index) => {
        const Icon = questionIcons[field.type];
        return (
          <div
            className="flex flex-col gap-2 rounded-lg border p-4"
            key={field.id}
          >
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md border bg-accent">
                <Icon />
              </div>
              <p>Pregunta {index + 1}.</p>

              <span className="ml-auto text-sm">Puntos:</span>
              <Input
                className="w-20"
                min="1"
                type="number"
                placeholder="1"
                {...register(`questions.${index}.points`, {
                  valueAsNumber: true,
                })}
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => removeAction(index)}
              >
                <Trash className="stroke-gray-500" />
              </Button>
            </div>

            <Field
              control={control}
              name={`questions.${index}.ask`}
              render={(field) => (
                <Input placeholder={`Pregunta ${index + 1}`} {...field} />
              )}
            />

            {field.type === 'multiple-choice' && <Answers index={index} />}
          </div>
        );
      })}
    </div>
  );
}
