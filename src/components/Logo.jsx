import { Check } from "lucide-react";

export default function Logo({ href = "#home" }) {
  return (
    <a href={href} className="logo">
      <span className="logo-mark" aria-hidden="true">
        <Check size={15} strokeWidth={3} />
      </span>
      <span>TaskFlow</span>
    </a>
  );
}
