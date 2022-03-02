import React from "react";

export default function Button({
  type = "button",
  children,
}: {
  type: "button" | "submit" | "reset" | undefined;
  children: JSX.Element;
}) {
  return <button type={type}>{children}</button>;
}
