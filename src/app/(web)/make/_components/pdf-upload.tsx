'use client';

import { Upload } from 'lucide-react';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { HoverInfo } from '@/components/hover-info';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfUpload({
  saveAction,
}: {
  saveAction: (value: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(2);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
    }
  };

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = Number(event.target.value);
    setStart(newStart);
    if (newStart >= end) {
      setEnd(newStart + 1);
    }
  };

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEnd = Number(event.target.value);
    if (newEnd >= start) {
      setEnd(newEnd);
    } else {
      setEnd(start);
    }
  };

  const handleExtractText = async () => {
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

    const totalPages = pdf.numPages;
    const safeStart = Math.max(1, Math.min(start, totalPages));
    const safeEnd = Math.min(end, totalPages);

    const extracted: string[] = [];

    for (let i = safeStart; i <= safeEnd; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const text = content.items
        .map((item: unknown) => {
          if (typeof item === 'object' && item !== null && 'str' in item) {
            return (item as { str: string }).str;
          }
          return '';
        })
        .join(' ');
      extracted.push(text);
    }

    saveAction(extracted.join('\n\n'));
  };

  return (
    <div className="mx-1 flex flex-col">
      <div className="flex h-9 items-center gap-1 rounded-lg border bg-accent px-2">
        <HoverInfo title="Seleccionar PDF">
          <label className="cursor-pointer" htmlFor="file-upload">
            <Upload className="size-7" strokeWidth={1} />
            <input
              accept="application/pdf"
              className="hidden"
              type="file"
              id="file-upload"
              onChange={handleUpload}
            />
          </label>
        </HoverInfo>
        {file && (
          <>
            <p className="ml-2 text-xs">Página: </p>
            <Input
              className="h-6 w-16"
              type="number"
              value={start}
              min={1}
              onChange={handleStartChange}
            />
            <p className="text-xs">Hasta:</p>
            <Input
              className="h-6 w-16"
              type="number"
              value={end}
              min={1}
              onChange={handleEndChange}
            />
            <Button className="h-6" type="button" onClick={handleExtractText}>
              Extraer
            </Button>
          </>
        )}
      </div>
      {file && (
        <p className="max-w-3xs truncate text-muted-foreground text-xs">
          {file.name}
        </p>
      )}
    </div>
  );
}
