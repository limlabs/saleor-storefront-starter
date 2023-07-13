import TextInput from "@/app/daisyui/text-input";
import { ChangeEvent } from "react";

interface formInputProps {
  value: string;
  label: string;
  id: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  value,
  onChange,
  label,
  id,
  type = "",
}: formInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        className="bg-white border border-black"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
