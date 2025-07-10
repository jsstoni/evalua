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
    <section className="mx-6 mt-6">
      <Create />
    </section>
  );
}
