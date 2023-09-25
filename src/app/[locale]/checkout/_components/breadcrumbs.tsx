"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { CheckoutUrlParams } from "../types";
import { FC } from "react";

export const CheckoutBreadcrumbs: FC = () => {
  const pathname = usePathname();
  const { locale } = useParams<CheckoutUrlParams>();

  const linkStyles = (path: string) => {
    const baseStyles = "text-lg lg:text-xl mt-0.5";
    const active = "font-bold";
    const inactive = "text-disabled opacity-35";

    return `${baseStyles} ${pathname.endsWith(path) ? active : inactive}`;
  };

  return (
    <section className="justify-between items-start w-full max-w-sm ml-0 self-center flex flex-row gap-5 flex-wrap pl-px pr-5 py-1.5 max-md:justify-center lg:mt-10">
      <Link
        href={`/${locale}/checkout/delivery`}
        className={linkStyles("/checkout/delivery")}
      >
        Delivery
      </Link>
      <span className="font-normal opacity-35 text-xl self-center text-center min-w-[9px] mt-px">
        /
      </span>
      <Link
        href={`/${locale}/checkout/payment`}
        className={linkStyles("/checkout/payment")}
      >
        Payment
      </Link>
      <span className="font-normal opacity-35 text-xl self-center text-center min-w-[9px] mt-px">
        /
      </span>
      <Link
        href={`/${locale}/checkout/review`}
        className={linkStyles("/checkout/review")}
      >
        Review
      </Link>
    </section>
  );
};
