import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-xl",
  secondary:
    "bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-primary",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
