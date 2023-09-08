'use client';

import Button from '@/app/daisyui/button';
import { TextField } from '../(components)/textField';
import { useTranslations } from '@/core/server/useTranslations';
import RequiredLabel from '../(components)/requiredLabel';
import { FormEvent, useState } from 'react';
import { gqlClient } from '@/gql';
import { useRouter } from 'next/navigation';
import {
  loginSubmit,
  registerSubmit,
} from '../(components)/serverSubmitHandlers';

export const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [dirty, setDirty] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('register');
  const [registrationError, setRegistrationError] = useState<string>('');
  const t = useTranslations();
  const router = useRouter();

  const emailError = Boolean(email)
    ? ''
    : 'Please enter your email to create an account.';
  const passwordError = Boolean(email)
    ? ''
    : 'Please enter a non-empty password.';
  const confirmPasswordError = Boolean(password === confirmPassword)
    ? ''
    : 'Passwords must match to continue.';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDirty(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    const respPromise = registerSubmit(formData);

    respPromise.then((resp) => {
      if (resp.accountRegister?.accountErrors.length !== 0) {
        setRegistrationError(
          'An error occurred when trying to create your account. Please try again, or come back later!'
        );
      } else if (resp.accountRegister?.user?.isActive) {
        setButtonText('creating account');
        loginSubmit(formData);
        router.push('/home');
      }
    });
  };

  return (
    <div className=" flex-col justify-start items-start gap-6 inline-flex">
      <h1 className="text-base-10 text-4xl font-bold ">
        {t('login.create account')}
      </h1>
      <p className=" h-5 text-base-10 text-base font-semibold">
        {t('login.sign up message')}
      </p>
      <form
        className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full"
        onSubmit={handleSubmit}
      >
        <TextField
          label={t('login.first name')}
          id="firstName"
          value={firstName}
          name="firstName"
          className="flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label={t('login.last name')}
          id="lastName"
          name="lastName"
          value={lastName}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="registerEmail"
          name="email"
          value={email}
          label={<RequiredLabel label={t('login.email')} />}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setEmail(e.target.value)}
          annotation={dirty ? emailError : null}
        />
        <TextField
          label={<RequiredLabel label={t('login.password')} />}
          id="registerPassword"
          name="password"
          value={password}
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setPassword(e.target.value)}
          annotation={dirty ? passwordError : null}
        />
        <TextField
          label={<RequiredLabel label={t('login.confirm password')} />}
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setConfirmPassword(e.target.value)}
          annotation={dirty ? confirmPasswordError : null}
        />
        <div className="w-full">
          <Button variant="secondary">{t(`login.${buttonText}`)}</Button>
        </div>
        <p>{registrationError}</p>
      </form>
    </div>
  );
};
