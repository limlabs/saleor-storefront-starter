"use client";
import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";
import { FormEvent, useState } from "react";

export const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="h-auto bg-slate-200 w-full flex flex-col items-center p-8">
      <h1 className="font-bold text-xl text-black">CREATE ACCOUNT</h1>
      <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <TextInput
            id="firstName"
            className="bg-white border border-black"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <TextInput
            id="lastName"
            className="bg-white border border-black"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email*</label>
          <TextInput
            id="email"
            className="bg-white border border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password*</label>
          <TextInput
            id="password"
            className="bg-white border border-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <TextInput
            id="confirmPassword"
            className="bg-white border border-black"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <Button>REGISTER</Button>
        </div>
      </form>
    </div>
  );
};
