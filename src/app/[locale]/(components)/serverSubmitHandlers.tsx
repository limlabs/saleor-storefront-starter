'use server';

import { gqlClient } from '@/gql';
import { cookies } from 'next/headers';

export const loginSubmit = async (data: FormData) => {
  const email = data.get('email') as string;
  const password = data.get('password') as string;
  const twentyFourHoursInSeconds = 24 * 60 * 60;
  const resp = await gqlClient.tokenCreate({
    email: email,
    password: password,
  });

  if (resp.tokenCreate?.token) {
    // @ts-ignore

    cookies().set({
      name: 'session',
      value: resp.tokenCreate?.token,
      httpOnly: true,
      path: '/',
      expires: new Date(Date.now() + twentyFourHoursInSeconds * 1000),
    });
  }

  return resp;
};

export const registerSubmit = async (data: FormData) => {
  const firstName = data.get('firstName') as string;
  const lastName = data.get('lastName') as string;
  const email = data.get('email') as string;
  const password = data.get('password') as string;

  const resp = await gqlClient.accountRegister({
    input: {
      email,
      password,
      firstName,
      lastName,
      channel: 'default-channel',
    },
  });

  return resp;
};

export const requestPasswordReset = async (data: FormData) => {
  const email = data.get('email') as string;

  const domain = window.location.origin;
  const redirectUrl = `${domain}/reset-password`;
  
  const resp = await gqlClient.requestPasswordReset({
    email: email,
    redirectUrl: redirectUrl,
  });
  return resp;
};

export const setPassword = async (data: FormData) => {
  const token = data.get('token') as string;
  const email = data.get('email') as string;
  const password = data.get('password') as string;
  const resp = await gqlClient.setPassword({
    token: token,
    email: email,
    password: password,
  });
  return resp;
};
