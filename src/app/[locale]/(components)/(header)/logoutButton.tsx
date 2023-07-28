"use client";

import { FC } from "react";
import { logout } from "../serverSubmitHandlers";
import { useTranslations } from "@/core/server/useTranslations";
import { useRouter } from "next/navigation";
export const LogoutButton: FC = () => {
  const router = useRouter();

  const t = useTranslations();
  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <div className="cursor-pointer z-100" onClick={handleLogout}>
      {t("header.log out")}
    </div>
  );
};
