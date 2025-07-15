'use client';

import type { UseFieldArrayAppend } from 'react-hook-form';
import { Button } from '@/components/ui/button';
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
    const options: Record<'answer', string>[] = [];
    if (type === 'multiple-choice') {
      options.push({ answer: '' });
    }
    appendAction({ type, ask: '', points: 1, options });
  };

  return (
    <Button
      className="w-full justify-start"
      type="button"
      variant="ghost"
      size="sm"
      onClick={addQuestion}
    >
      {children}
    </Button>
  );
}
