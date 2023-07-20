import Button from "@/app/daisyui/button";
import { TextField } from "../(components)/textField";
import Link from "next/link";
import { Translation } from "../(components)/(translation)";

export default function Login() {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-6">
      <h1 className="text-base-10 text-4xl font-bold ">
        {<Translation t="login.log in" />}
      </h1>
      <form className="flex flex-col justify-start items-start gap-8 w-full">
        <TextField
          id="loginEmail"
          label={<Translation t="login.email" />}
          className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={<Translation t="login.password" />}
          id="loginPassword"
          type="password"
          className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
        />
      </form>
      <Button variant="primary"> {<Translation t="login.log in" />}</Button>
      <Link href={"forgot-password"} className="underline block">
        {<Translation t="login.forgot password" />}
      </Link>
    </div>
  );
}
