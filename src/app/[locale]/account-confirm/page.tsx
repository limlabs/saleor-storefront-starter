import Button from "@/app/daisyui/button";
import Link from "next/link";

export default function AccountConfirm() {
  return (
    <div className="h-full pt-6 bg-base-800 flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-base-800 text-4xl font-bold uppercase">
          Account Verified.
        </div>
        <div className="self-stretch text-base-800 text-base font-semibold">
          You can now access your account in the account settings.
        </div>
        <div className="self-stretch text-base-800 text-base font-semibold">
          <Link href="/shop">
            <Button>return to shop</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
