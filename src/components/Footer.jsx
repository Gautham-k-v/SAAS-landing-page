import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "What’s New", href: "#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#faq" },
      { label: "Getting Started", href: "#how-it-works" },
      { label: "Community", href: "#testimonials" },
      { label: "Contact", href: "#faq" },
    ],
  },
];

function SocialIcon({ name }) {
  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.7 10.3 22.4 1.5h-1.8l-6.7 7.6L8.4 1.5H1.6l8.1 11.6L1.6 22.5h1.8l7.1-8.1 5.7 8.1h6.8l-8.3-12.2Zm-2.5 2.8-.8-1.2L4.2 2.9h2.8l5.3 7.5.8 1.2 6.9 9.8h-2.8l-5-7.3Z"
        />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4ZM20.3 20h-2.8v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H10.7s.1-9.3 0-10.5h2.8v1.7c.4-.6 1.1-1.9 2.9-1.9 2.1 0 3.9 1.4 3.9 4.5V20Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.8-8.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM21 7.6a6.3 6.3 0 0 0-1.7-4.5A6.4 6.4 0 0 0 14.8 1.4c-1.8-.1-7.2-.1-9 0A6.4 6.4 0 0 0 1.4 5.9 6.7 6.7 0 0 0 1 12a6.7 6.7 0 0 0 .4 6.1 6.4 6.4 0 0 0 4.4 4.5c1.8.1 7.2.1 9 0a6.4 6.4 0 0 0 4.5-4.5A6.7 6.7 0 0 0 23 12a6.7 6.7 0 0 0-2-4.4Zm-1.2 9.9a3.6 3.6 0 0 1-2 2c-1.4.6-4.7.4-6.3.4s-4.9.1-6.3-.4a3.6 3.6 0 0 1-2-2c-.6-1.4-.4-4.7-.4-6.3s-.2-4.9.4-6.3a3.6 3.6 0 0 1 2-2c1.4-.6 4.7-.4 6.3-.4s4.9-.2 6.3.4a3.6 3.6 0 0 1 2 2c.6 1.4.4 4.7.4 6.3s.2 4.9-.4 6.3Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo href="#home" />
          <p>
            Less chaos. More clarity.
            <br />
            A calmer way to do your best work.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2>Stay in the flow</h2>
          <p>A little inspiration for a more productive day.</p>
          <div className="socials">
            {["X", "LinkedIn", "Instagram"].map((name) => (
              <a key={name} href="#footer" aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 TaskFlow. All rights reserved.</p>
        <div>
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
