"use client";
import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";
import { FormEvent, useState } from "react";
import { TextField } from "../(components)/textField";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="h-auto bg-slate-200 w-full flex flex-col items-center p-8">
      <form>
        <h1 className="font-bold text-xl text-black">LOGIN</h1>
        <section className="flex flex-col gap-4 text-black">
          <TextField
            value={email}
            id="loginEmail"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={password}
            label="Password*"
            id="loginPassword"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </section>

        <div className="mt-4">
          <Button>LOG IN</Button>
        </div>
      </form>

      <h2 className="text-black">Forgot Password?</h2>
    </div>
  );
};
