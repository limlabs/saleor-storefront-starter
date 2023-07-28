"use client";

import { FC, useTransition } from "react";
import { logout } from "../serverSubmitHandlers";
import { useTranslations } from "@/core/server/useTranslations";

export const LogoutButton: FC = () => {
  const t = useTranslations();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="cursor-pointer z-100" onClick={handleLogout}>
      {t("header.log out")}
    </div>
  );
};
