import { cn } from '@/lib/utils';

export function Logo({
  variant = 'default',
}: {
  variant?: 'sidebar' | 'default';
}) {
  const fill = variant === 'default' ? 'fill-primary' : 'fill-muted';
  return (
    <svg
      className={cn('size-8', fill)}
      viewBox="0 0 169 159"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M33 126H136V139C136 150.046 127.046 159 116 159H66C47.7746 159 33 144.225 33 126V126Z" />
      <path d="M0 59C0 47.9543 8.95431 39 20 39H33V121H20C8.9543 121 0 112.046 0 101V59Z" />
      <path d="M136 39H149C160.046 39 169 47.9543 169 59V76C169 87.0457 160.046 96 149 96H136V39Z" />
      <path d="M33 20C33 8.95431 41.9543 0 53 0H103C121.225 0 136 14.7746 136 33V33H33V20Z" />
      <path d="M38 63H98C116.225 63 131 77.7746 131 96V96H71C52.7746 96 38 81.2254 38 63V63Z" />
    </svg>
  );
}
