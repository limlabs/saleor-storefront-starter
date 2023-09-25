import React, { FC } from "react";

import Button from "@/app/daisyui/button";
import { CheckoutUrlParams } from "../types";
import { Link } from "../../(components)/link";
import { NextPage } from "next";

const MemberCheckout: FC<CheckoutUrlParams> = ({ locale }) => {
  return (
    <div className="flex flex-col items-center gap-4 col-span-4">
      <h2 className="text-center text-xl sm:text-2xl">Check out as member</h2>
      <Button
        className="w-full font-semibold uppercase text-center px-5 py-5 rounded-3xl"
        variant="primary"
      >
        <Link href="/login" locale={locale}>
          Login
        </Link>
      </Button>
    </div>
  );
};

const GuestCheckout: FC<CheckoutUrlParams> = ({ locale }) => {
  return (
    <div className="flex flex-col items-center gap-4 col-span-4  mt-10 sm:mt-0 ">
      <h2 className="text-center text-xl sm:text-2xl">Check out as guest</h2>
      <Button
        className="w-full font-semibold uppercase text-center px-5 py-5 rounded-3xl"
        variant="secondary"
      >
        <Link href="/checkout/shipping" locale={locale}>
          Guest Checkout
        </Link>
      </Button>
    </div>
  );
};

const CheckoutLandingPage: NextPage<{ params: CheckoutUrlParams }> = ({
  params,
}: {
  params: CheckoutUrlParams;
}) => (
  <section className="w-full max-w-screen-lg flex flex-col items-center ">
    <header className="flex flex-col items-start mt-24 pt-7 px-5">
      <h1 className="self-center text-center font-normal text-2xl sm:text-3xl">
        How would you like to check out?
      </h1>
    </header>
    <section className="grid grid-cols-1 sm:grid-cols-9 items-center mt-20">
      <MemberCheckout {...params} />
      <div className="h-full hidden sm:flex col-span-1 justify-center">
        <div className="bg-accent w-px h-full"></div>{" "}
      </div>
      <GuestCheckout {...params} />
    </section>
  </section>
);

export default CheckoutLandingPage;
