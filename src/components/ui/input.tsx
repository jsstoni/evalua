import { cn } from '@/lib/utils';

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'h-9 w-full rounded-lg border bg-card px-3 py-1 text-base shadow-xs outline-0',
        className,
      )}
      type={type}
      {...props}
    />
  );
}
