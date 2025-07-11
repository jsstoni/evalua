import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Create } from '@/app/(web)/make/_components/create';
import { auth } from '@/lib/auth';

export default async function MakePage() {
  const profile = await auth.api.getSession({ headers: await headers() });

  if (!profile) {
    redirect('/');
  }

  return (
    <section className="h-[calc(100svh-3.5rem-1px)] border-x px-6 pt-12">
      <Create />
    </section>
  );
}
