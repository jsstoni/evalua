import { FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';
import { Signin } from '@/components/signin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b">
        <nav className="container flex h-14 items-center justify-between gap-2 border-x px-6">
          <p className="flex items-center gap-2 font-medium text-xl">
            <Logo />
            Evalua
          </p>
          <div className="ml-auto flex items-center gap-2">
            <Signin />
            <Button asChild>
              <Link href="/make">
                <FileText className="size-4" />
                Crear prueba
              </Link>
            </Button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
