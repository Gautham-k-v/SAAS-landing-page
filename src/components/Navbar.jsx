import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <Logo />

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-login" href="#pricing">
            Login
          </a>
          <Button href="#pricing">Get Started</Button>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open
        ? createPortal(
            <div className="nav-mobile" onClick={close}>
              <nav aria-label="Mobile" onClick={(event) => event.stopPropagation()}>
                {links.map((link) => (
                  <a key={link.href} href={link.href} onClick={close}>
                    {link.label}
                  </a>
                ))}
                <a href="#pricing" onClick={close}>
                  Login
                </a>
                <Button href="#pricing" onClick={close}>
                  Get Started
                </Button>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
