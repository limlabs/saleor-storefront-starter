"use client";

import Button, { ButtonProps } from "@/app/daisyui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();

  return <Button type="submit" disabled={pending} {...props} />;
}
