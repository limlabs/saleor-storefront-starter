import { CreateAccount } from "./createAccount";
import { Login } from "./login";

export default function Auth() {
  return (
    <div className="w-full py-6 justify-start items-start gap-2.5 lg:flex">
      <Login />
      <CreateAccount />
    </div>
  );
}
