"use client";

/* eslint-disable react/button-has-type */

type ButtonProps = {
  variant?: "primary" | "ghost";
  label: string;
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/40";

export default function Button({
  variant = "primary",
  label,
  onClick,
  className
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/30"
      : "border border-accent-700/20 text-accent-700 hover:border-primary-500/50 hover:bg-primary-500/5";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
