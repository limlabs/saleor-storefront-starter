import { FC, ReactNode } from "react";
import { RootLayoutHeader } from "./header";
import { ThemePicker } from "./theme";

export const AppRoot: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto my-6 w-full max-w-6xl ">
      <RootLayoutHeader />
      {children}
      <ThemePicker />
    </div>
  );
};
