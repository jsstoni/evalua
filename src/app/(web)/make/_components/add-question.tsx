'use client';

import { PlusCircle } from 'lucide-react';
import type { UseFieldArrayAppend } from 'react-hook-form';
import { Button } from '@/components/button';
import type { MakeForm } from '@/lib/schema';

export function AddQuestion({
  appendAction,
}: {
  appendAction: UseFieldArrayAppend<MakeForm, 'questions'>;
}) {
  const addQuestion = () => {
    appendAction({ ask: '', points: 0, options: [] });
  };

  return (
    <Button type="button" variant="ghost" onClick={addQuestion}>
      <PlusCircle />
    </Button>
  );
}
