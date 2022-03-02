// @Vendors
import React from "react";

// @Types
import { IButtonProps } from "../../types/IButtonProps";

export default function Button({ type = "button", children }: IButtonProps) {
  return (
    <button className="btn px-7 py-3 bg-black text-gray rounded" type={type}>
      {children}
    </button>
  );
}
