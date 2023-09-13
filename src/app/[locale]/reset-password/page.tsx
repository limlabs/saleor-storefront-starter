// in here, we'll have 2 input fields (enter new password, confirm new password) and a submit button
// clicking submit calls the server function that calls the graphql mutation named "setPassword"
// the mutation takes in the token and the new password and returns a token and a user

'use client';

import Button from '@/app/daisyui/button';
import { TextField } from '../(components)/textField';
import { useTranslations } from '@/core/server/useTranslations';
import { useEffect, useState } from 'react';
import { setPassword } from '../(components)/serverSubmitHandlers';
import { useSearchParams } from 'next/navigation';

// TODO: write function that calls the graphql mutation named "setPassword"

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [dirty, setDirty] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const handleSubmit = () => {
    const formData = new FormData();

    const email = searchParams.get('email');
    const token = searchParams.get('token');

    formData.append('password', newPassword);
    formData.append('email', email as string);
    formData.append('token', token as string);
    const respPromise = setPassword(formData);

    respPromise.then((resp) => {
      setIsSubmitted(true);
    });
  };

  // TODO: re-enable submit button and add message "Unable to reset password. Please try again later." if mutation fails

  useEffect(() => {
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      setIsSubmitted(false);
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      setIsSubmitted(false);
      return;
    }
    setPasswordError('');
  }, [newPassword, confirmPassword]);

  if (isSubmitted) {
    return (
      <div className="py-7 justify-start items-start gap-2.5 inline-flex">
        <div className="w-full md:w-1/2 p-10">
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <h1 className="text-base-10 text-4xl font-bold ">
              Password Reset Successfully.
            </h1>
            <h3>
              You can now log in using your new password.
            </h3>
            <div className="w-[486px] text-white text-base font-semibold underline">
              <a href="/login">Go to Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-7 justify-start items-start gap-2.5 inline-flex">
      <div className="w-full md:w-1/2 p-10">
        <div className="flex flex-col justify-start items-start w-full gap-6">
          <h1 className="text-base-10 text-4xl font-bold ">
            CREATE NEW PASSWORD
          </h1>
          <form
            className="flex flex-col justify-start items-start gap-8 w-full"
            action={handleSubmit}
          >
            <TextField
              id="newPassword"
              name="email"
              label="New Password*"
              type="password"
              className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password*"
              id="confirmPassword"
              name="password"
              type="password"
              className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <Button
              type="submit"
              variant="primary"
                disabled={Boolean(passwordError || newPassword === '' || confirmPassword === '')}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
