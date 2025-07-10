import Google from '@/components/google';
import { Logo } from '@/components/logo';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="container">
        <nav className="flex items-center gap-4 py-4">
          <p className="flex items-center gap-2 font-medium text-2xl">
            <Logo />
            Evalua
          </p>

          <Link
            className="ml-auto flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white shadow-xs"
            href="#"
          >
            <FileText className="size-6" />
            Crear prueba
          </Link>
          <button
            className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 shadow-xs"
            type="button"
          >
            <Google className="size-6" /> Ingresar con google
          </button>
        </nav>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-10 text-center">
          <h1 className="font-black text-7xl">
            Genera Preguntas Inteligentes en Segundos
          </h1>
        </div>
      </header>

      {children}
    </>
  );
}
