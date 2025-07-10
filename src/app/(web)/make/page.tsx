import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function MakePage() {
  const profile = await auth.api.getSession({ headers: await headers() });

  if (!profile) {
    redirect('/');
  }

  return <h1>Make</h1>;
}
