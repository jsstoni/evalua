'use client';

import Image from 'next/image';
import Google from '@/components/google';
import { authClient } from '@/lib/auth-client';
import { Button } from './button';

export function Signin() {
  const { data: profile, isPending } = authClient.useSession();
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };

  if (isPending) {
    return (
      <div className="h-9 w-40 animate-pulse rounded-lg border bg-accent" />
    );
  }

  if (profile) {
    return (
      <div className="flex items-center gap-2">
        <p className="text-right">
          {profile.user.name}
          <span className="block text-xs">{profile.user.email}</span>
        </p>
        <Image
          className="size-9 rounded-lg"
          src={profile.user.image as string}
          width={40}
          height={40}
          alt={profile.user.name}
        />
      </div>
    );
  }

  return (
    <Button type="button" variant="ghost" onClick={handleLogin}>
      <Google className="size-6" /> Ingresar con google
    </Button>
  );
}
