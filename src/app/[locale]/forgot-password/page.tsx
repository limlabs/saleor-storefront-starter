'use client';

import { Locale } from '@/locale-config';
import { Channel } from '@/channel-config';
import { useTranslations } from '@/core/server/useTranslations';
import { useState } from 'react';
import { requestPasswordReset } from '../(components)/serverSubmitHandlers';
import { TextField } from '../(components)/textField';
import Button from '@/app/daisyui/button';

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
}

export default function RequestPasswordReset() {
  const [email, setEmail] = useState<string>('');
  const [dirty, setDirty] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const t = useTranslations();

  const handleEmailUpdated = (e: any) => {
    setDirty(true);
    setEmail(e.target.value);
  };

  let emailError = '';
  if (dirty && !email) {
    emailError = 'Please enter your email to continue.';
  } else if (dirty && /\S+@\S+\.\S+/.test(email) === false) {
    emailError = 'Please provide a valid email address.';
  }

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('email', email);
    const respPromise = requestPasswordReset(formData);

    respPromise.then((resp) => {
      requestPasswordReset(formData);
      setIsSubmitted(true);
    });
  };

  if (isSubmitted) {
    return <div className="py-7 justify-start items-start gap-2.5 inline-flex">
      <div className="w-full md:w-1/2 p-10">
        <div className="flex flex-col justify-start items-start w-full gap-6">
          <h1 className="text-base-10 text-4xl font-bold ">
            Check your inbox
          </h1>
          <h3>An email with instructions on how to create a new password has been sent to your address. Check your spam folder if you don&apos;t see anything in the next few minutes.</h3>
        </div>
      </div>
    </div>
  }

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
              type="email"
              label={t('login.email')}
              className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
              onChange={handleEmailUpdated}
              value={email}
              required
            />
            <p>{emailError}</p>
            <Button
              type="submit"
              variant="primary"
              disabled={Boolean(emailError || !dirty)}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
