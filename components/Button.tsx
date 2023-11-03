"use client";
import Image from "next/image";
import React from "react";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};
const redirectToWebsite = () => {
  // Replace the URL in the parentheses with the URL you want to redirect to
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={redirectToWebsite}
    >
      {icon && <Image alt="icon" src={icon} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
