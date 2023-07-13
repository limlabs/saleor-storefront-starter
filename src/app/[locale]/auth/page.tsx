import { CreateAccount } from "./createAccount";
import { Login } from "./login";

export default function Auth() {
  return (
    <div className="bg-white h-auto lg:flex">
      <Login />
      <CreateAccount />
    </div>
  );
}
