"use client";

import { FC } from "react";
import Button from "@/app/daisyui/button";
import { gqlClient } from "@/gql";
import { logout } from "../serverSubmitHandlers";

export const LogoutButton: FC = () => {
  const handleLogout = async () => {
    logout();
  };
  return (
    <Button variant="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};
