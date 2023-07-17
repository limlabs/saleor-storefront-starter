import TextInput from "@/app/daisyui/text-input";
import { ChangeEvent } from "react";

interface textFieldProps {
  value: string;
  label: string;
  id: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  value,
  onChange,
  label,
  id,
  type = "",
}: textFieldProps) => {
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
