"use client";
import Button from "@/app/daisyui/button";
import { ErrorInfo, FormEvent, useState } from "react";
import { TextField } from "../(components)/textField";
import { IAccountRegister } from "@/gql/sdk";
import { gqlClient } from "@/gql";

export const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="h-auto bg-slate-200 w-full flex flex-col items-center p-8">
      <h1 className="font-bold text-xl text-black">CREATE ACCOUNT</h1>
      <form className="flex flex-col gap-4 text-black">
        <TextField
          value={firstName}
          label="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          value={lastName}
          label="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          value={email}
          id="registerEmail"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          value={password}
          label="Password*"
          id="registerPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <TextField
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
