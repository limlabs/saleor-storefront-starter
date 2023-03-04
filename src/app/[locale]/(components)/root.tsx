import { FC, ReactNode } from "react";
import { RootLayoutHeader } from "./header";

export const AppRoot: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto my-6 w-full max-w-6xl ">
      <RootLayoutHeader />
      {children}
    </div>
  );
};
