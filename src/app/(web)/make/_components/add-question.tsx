'use client';

import { CirclePlus } from 'lucide-react';
import type { UseFieldArrayAppend } from 'react-hook-form';
import { Button } from '@/components/button';
import type { MakeForm, QuestionType } from '@/lib/schema';

export function AddQuestion({
  children,
  appendAction,
  type,
}: {
  children?: React.ReactNode;
  appendAction: UseFieldArrayAppend<MakeForm, 'questions'>;
  type: QuestionType;
}) {
  const addQuestion = () => {
    appendAction({ type, ask: '', points: 0, options: [] });
  };

  return (
    <Button
      className="relative"
      type="button"
      variant="ghost"
      onClick={addQuestion}
    >
      {children}
      <CirclePlus className="absolute right-0 bottom-0" size={14} />
    </Button>
  );
}
