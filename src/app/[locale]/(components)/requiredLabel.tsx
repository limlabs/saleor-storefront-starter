import React from "react";

interface RequiredLabelProps {
  label: string;
}

const RequiredLabel = ({ label }: RequiredLabelProps) => (
  <label>
    {label} <span className="text-primary">*</span>
  </label>
);

export default RequiredLabel;
