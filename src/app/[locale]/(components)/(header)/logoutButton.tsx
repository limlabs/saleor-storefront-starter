"use client";

import { FC } from "react";
import { logout } from "../serverSubmitHandlers";

export const LogoutButton: FC = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="cursor-pointer z-100" onClick={handleLogout}>
      Log Out
    </div>
  );
};
