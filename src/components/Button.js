"use client";

import React from "react";
import { cva } from "class-variance-authority";
import { Icon } from "@iconify/react";

const button = cva(
  [
    "font-medium rounded-md w-max  transition-all flex gap-2 items-center justify-center cursor-pointer ",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-brand-secondary",
          "text-white",
          "border-transparent",
          "hover:bg-brand-primary",
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],

        ghost:['text-text-primary hover:text-gray-300']
      },
      size: {
        small: ["text-sm", "py-2", "px-3"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium", icon: true }],
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  }
);

export const Button = ({
  className,
  intent,
  size,
  icon,
  children,
  ...props
}) => (
  <button className={button({ intent, size, icon, className })} {...props}>
    {children}
    {icon && <Icon width={20} icon={icon} className="text-white " />}
  </button>
);
