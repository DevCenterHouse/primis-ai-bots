export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://primisbank.com/wp-content/uploads/2024/08/primisbank-logo.png"
            alt="Primis Bank"
            className="logo-dark"
            style={{ height: "22px", width: "auto" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/primis-logo-light.png"
            alt="Primis Bank"
            className="logo-light"
            style={{ height: "22px", width: "auto" }}
          />
        </div>
        <p
          className="text-xs text-center"
          style={{ color: "var(--text-muted)" }}
        >
          Built by the Primis AI Team &nbsp;·&nbsp; Copilot Studio + Power
          Automate
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          2026
        </p>
      </div>
    </footer>
  );
}
