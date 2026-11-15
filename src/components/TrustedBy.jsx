const logos = ["Orbit", "Layers", "Quotient", "Capsule", "Spherule"];

export default function TrustedBy() {
  return (
    <section className="trusted" aria-label="Trusted by">
      <div className="container">
        <p>Helping productive teams get more done.</p>
        <ul>
          {logos.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
