'use client';

import { getTranslations } from '@/core/server/getTranslations';
import { ResolvedMetadata, ResolvingMetadata } from 'next';
import { Locale } from '@/locale-config';
import { Channel } from '@/channel-config';
import { useTranslations } from '@/core/server/useTranslations';
import { useState } from 'react';
import { loginSubmit } from '../(components)/serverSubmitHandlers';
import { useRouter } from 'next/navigation';
import { TextField } from '../(components)/textField';
import Button from '@/app/daisyui/button';
import Link from 'next/link';

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
}

export default function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const t = useTranslations();
  const router = useRouter();

  const handleSubmit = () => {
    // TODO: implement email submit logic
    // we want to send an email to the user with a link to reset their password
    // link will have token
    // handled by reset-password.tsx?
  };

  return (
    <div className="py-7 justify-start items-start gap-2.5 inline-flex">
      <div className="w-full md:w-1/2 p-10">
        <div className="flex flex-col justify-start items-start w-full gap-6">
          <h1 className="text-base-10 text-4xl font-bold ">
            REQUEST PASSWORD RESET
          </h1>
          <h3>Please provide your email to request a new password.</h3>
          <form
            className="flex flex-col justify-start items-start gap-8 w-full"
            action={handleSubmit}
          >
            <TextField
              id="loginEmail"
              name="email"
              label={t('login.email')}
              className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="primary">SUBMIT</Button>
            <p>{emailError}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
