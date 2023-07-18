import { CreateAccount } from "./createAccount";
import { Login } from "./login";

export default function Auth() {
  return (
    <div className=" py-6 justify-start items-start gap-2.5 inline-flex">
      <Login />
      <CreateAccount />
    </div>
  );
}
