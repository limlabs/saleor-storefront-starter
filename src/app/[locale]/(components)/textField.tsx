import TextInput from "@/app/daisyui/text-input";
import { ChangeEvent, ReactNode } from "react";

interface TextFieldProps {
  value?: string;
  label: string | ReactNode;
  id: string;
  type?: string;
  annotation?: string | null;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export const TextField = ({
  value,
  onChange,
  label,
  id,
  type = "",
  annotation,
  className,
}: TextFieldProps) => {
  return (
    <div className="flex-col justify-start items-start gap-3 inline-flex w-full ">
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
      />
      <p className="text-primary">{annotation}</p>
    </div>
  );
};
