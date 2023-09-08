// in here, we'll have 2 input fields (enter new password, confirm new password) and a submit button
// clicking submit calls the server function that calls the graphql mutation named "setPassword"
// the mutation takes in the token and the new password and returns a token and a user

'use client';

import Button from '@/app/daisyui/button';
import { TextField } from '../(components)/textField';
import { useTranslations } from '@/core/server/useTranslations';
import { useState } from 'react';

// TODO: write function that calls the graphql mutation named "setPassword"

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [dirty, setDirty] = useState<boolean>(false);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('password', newPassword);
    const respPromise = setPassword(formData);

    respPromise.then((resp) => {
      setPassword(formData);

      // setIsSubmitted(true);
    });
  };

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
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button variant="primary">SUBMIT</Button>
            <p>{passwordError}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
