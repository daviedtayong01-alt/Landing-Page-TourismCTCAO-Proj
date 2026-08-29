import * as React from "react";

import {
  cn,
} from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "pink";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const variants = {
    default:
      "bg-tourism-primary text-white hover:bg-tourism-primary-dark",

    outline:
      "border border-tourism-primary/20 bg-white text-tourism-primary hover:bg-tourism-primary hover:text-white",

    ghost:
      "bg-transparent text-tourism-primary hover:bg-tourism-primary/5",

    pink:
      "bg-tourism-accent text-white hover:bg-tourism-accent-dark",
  };

  return (
    <button
      className={cn(
        "inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}