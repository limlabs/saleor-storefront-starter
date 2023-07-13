"use client";
import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";
import { FormEvent, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="h-auto bg-slate-200 w-full flex flex-col items-center p-8">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl text-black">LOGIN</h1>
        <section className="flex flex-col gap-4 text-black">
          <div className="flex flex-col">
            <label>Email</label>
            <TextInput
              className="bg-white border border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <TextInput
              className="bg-white border border-black"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>

        <div className="mt-4">
          <Button>LOG IN</Button>
        </div>
      </form>

      <h2 className="text-black">Forgot Password?</h2>
    </div>
  );
};
