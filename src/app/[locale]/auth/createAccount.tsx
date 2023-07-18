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
    <div className="h-auto  w-full bg-base-200 flex flex-col items-center p-16 gap-12">
      <div className="flex flex-col justify-start p-0 items-start gap-8">
        <h1 className="font-bold text-3xl uppercase">create account</h1>
        <p className="text-base ">
          Sign up for an account to manage your addresses, orders, and returns.
        </p>
      </div>

      <form className="flex flex-col gap-8 w-full">
        <TextField
          value={firstName}
          label="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          className=" border border-black w-full"
        />
        <TextField
          value={lastName}
          label="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          className=" border border-black w-full"
        />
        <TextField
          value={email}
          id="registerEmail"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          className=" border border-black w-full"
        />
        <TextField
          value={password}
          label="Password*"
          id="registerPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className=" border border-black w-full"
        />
        <TextField
          value={confirmPassword}
          label="Confirm Password*"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          className=" border border-black w-full"
        />

        <Button variant="primary">register</Button>
      </form>
    </div>
  );
};
