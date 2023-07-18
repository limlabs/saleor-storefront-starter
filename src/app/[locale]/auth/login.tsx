"use client";
import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";
import { FormEvent, useState } from "react";
import { TextField } from "../(components)/textField";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="h-auto  w-full  flex flex-col items-center p-16 gap-12">
      <div className="flex flex-col justify-start p-0 items-start gap-8 w-full">
        <h1 className="font-bold text-3xl uppercase ">login</h1>
      </div>
      <form className="flex flex-col gap-8 w-full ">
        <TextField
          value={email}
          id="loginEmail"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          className=" border border-black w-full"
        />
        <TextField
          value={password}
          label="Password*"
          id="loginPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className=" border border-black w-full"
        />

        <Button variant="primary">LOG IN</Button>
      </form>

      <h2 className="">Forgot Password?</h2>
    </div>
  );
};
