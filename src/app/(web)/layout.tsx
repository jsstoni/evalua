import { FileText } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Signin } from '@/components/signin';

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
            href="/make"
          >
            <FileText className="size-6" />
            Crear prueba
          </Link>
          <Signin />
        </nav>
      </header>
      <main className="container">{children}</main>
    </>
  );
}
