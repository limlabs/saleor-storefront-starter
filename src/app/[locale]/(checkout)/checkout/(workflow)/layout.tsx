import { FC, PropsWithChildren } from "react";
import { CheckoutBreadcrumbs } from "../_components/breadcrumbs";

const CheckoutLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="checkout-layout-root flex flex-col gap-5">
      <CheckoutBreadcrumbs />
      {children}
    </div>
  );
};

export default CheckoutLayout;
