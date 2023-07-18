import TextInput from "@/app/daisyui/text-input";
import { ChangeEvent } from "react";

interface textFieldProps {
  value: string;
  label: string;
  id: string;
  type?: string;
  annotation?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export const TextField = ({
  value,
  onChange,
  label,
  id,
  type = "",
  annotation = "",
  className,
}: textFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
      />
      <p>{annotation}</p>
    </div>
  );
};
