import React, { ReactNode } from "react";

interface RequiredLabelProps {
  label: ReactNode;
}

const RequiredLabel = ({ label }: RequiredLabelProps) => (
  <label>
    {label} <span className="text-primary">*</span>
  </label>
);

export default RequiredLabel;
