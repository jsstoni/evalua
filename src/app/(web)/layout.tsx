import { FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';
import { Signin } from '@/components/signin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="container">
        <nav className="flex items-center justify-between gap-2 p-4 py-4">
          <p className="flex items-center gap-2 font-medium text-xl">
            <Logo />
            Evalua
          </p>
          <Button className="ml-auto" asChild>
            <Link href="/make">
              <FileText className="size-4" />
              Crear prueba
            </Link>
          </Button>
          <Signin />
        </nav>
      </header>
      <main className="container">{children}</main>
    </>
  );
}
