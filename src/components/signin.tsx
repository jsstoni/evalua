'use client';

import Google from '@/components/google';
import { authClient } from '@/lib/auth-client';

export function Signin() {
  const { data: profile, isPending } = authClient.useSession();
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };

  if (isPending) {
    return (
      <div className="h-10 w-40 animate-pulse rounded-lg border bg-accent" />
    );
  }

  if (profile) {
    return (
      <div className="flex items-center gap-2">
        {/** biome-ignore lint/performance/noImgElement: use img */}
        <img
          className="size-9 rounded-lg"
          src={profile.user.image as string}
          alt={profile.user.name}
        />
        <p>
          {profile.user.name}
          <span className="block text-xs">{profile.user.email}</span>
        </p>
      </div>
    );
  }

  return (
    <button
      className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 shadow-xs"
      type="button"
      onClick={handleLogin}
    >
      <Google className="size-6" /> Ingresar con google
    </button>
  );
}
