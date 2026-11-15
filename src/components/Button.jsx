import { ArrowRight } from "lucide-react";

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  onClick,
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
    >
      <span>{children}</span>
      {arrow ? <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" /> : null}
    </a>
  );
}
