import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function HoverInfo({
  children,
  title,
  side = 'top',
  align = 'center',
}: {
  children: React.ReactNode;
  title: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'center' | 'start' | 'end';
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={align}>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
