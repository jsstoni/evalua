'use client';

import { Trash } from 'lucide-react';
import { type UseFieldArrayRemove, useFormContext } from 'react-hook-form';
import type { MakeForm } from '@/lib/schema';

export function Question({
  index,
  remove,
}: {
  index: number;
  remove: UseFieldArrayRemove;
}) {
  const { register } = useFormContext<MakeForm>();

  const hadleRemove = () => {
    remove(index);
  };

  return (
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
        {...register(`questions.${index}.points`, { valueAsNumber: true })}
      />
      <Trash onClick={hadleRemove} />
    </div>
  );
}
