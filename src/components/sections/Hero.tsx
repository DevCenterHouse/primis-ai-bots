export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24">
        <p
          className="accent-label text-xs font-semibold tracking-[0.25em] uppercase mb-6 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          Primis AI Initiative
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-4xl animate-fade-up"
          style={{ color: "var(--text)", animationDelay: "80ms" }}
        >
          Demand more
          <br />
          from your{" "}
          <span style={{ color: "var(--accent-text)" }}>workday.</span>
        </h1>

        <p
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up"
          style={{ color: "var(--text-muted)", animationDelay: "180ms" }}
        >
          Four AI-powered tools, built in-house for Primis: handling the
          repetitive, the time-consuming, and the easy-to-miss so our teams
          can focus on higher-value work.
        </p>

        {/* Bot quick-links */}
        <div
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          {[
            { num: "01", label: "Meeting Minutes" },
            { num: "02", label: "Business Cards" },
            { num: "03", label: "Email Analyzer" },
            { num: "04", label: "Policy Comparison" },
          ].map(({ num, label }) => (
            <a
              key={num}
              href={`#bot-${num}`}
              className="bot-link flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 border rounded-lg w-full sm:w-auto"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-input)",
              }}
            >
              <span className="text-base font-bold" style={{ color: "var(--accent-text)" }}>
                {num}
              </span>
              <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                {label}
              </span>
              <svg
                className="w-3 h-3 ml-1"
                style={{ color: "var(--text-muted)" }}
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
