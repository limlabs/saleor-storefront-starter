"use client";
import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";
import { FormEvent, useState } from "react";
import { FormInput } from "../(components)/formInput";

export const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(password);
  };

  return (
    <div className="h-auto bg-slate-200 w-full flex flex-col items-center p-8">
      <h1 className="font-bold text-xl text-black">CREATE ACCOUNT</h1>
      <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
        <FormInput
          value={firstName}
          label="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormInput
          value={lastName}
          label="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormInput
          value={email}
          id="registerEmail"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          value={password}
          label="Password*"
          id="registerPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <FormInput
          value={confirmPassword}
          label="Confirm Password*"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />

        <div className="mt-4">
          <Button>REGISTER</Button>
        </div>
      </form>
    </div>
  );
};
