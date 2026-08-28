const impacts = [
  {
    team: "Operations",
    headline: "Meeting notes, handled.",
    body: "Select the meeting, run the bot, and get a structured MOM saved to SharePoint. No more spending 30-60 minutes after every call writing up what was said.",
    stat: "< 10 min",
    statLabel: "from transcript to professional document",
  },
  {
    team: "Mortgage Marketing",
    headline: "No more chasing information.",
    body: "Loan officer requests arrive complete. When they don't, the bot handles the follow-up automatically, before any human even sees the email.",
    stat: "Zero",
    statLabel: "manual follow-ups for complete requests",
  },
  {
    team: "Marketing",
    headline: "Inbox turned into a strategy asset.",
    body: "The email analyzer reads through mailbox history, surfaces recurring patterns and manual workflows, and identifies where automation would have the most impact.",
    stat: "100s",
    statLabel: "of emails analyzed in one run",
  },
  {
    team: "Compliance",
    headline: "Policy reviews without the grind.",
    body: "Comparing two 40-page documents used to mean an afternoon of careful reading. Now it means uploading two files and asking questions.",
    stat: "Minutes",
    statLabel: "instead of hours for compliance reviews",
  },
];

export default function ImpactSection() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-deep)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Decorative accent shape */}
      <div
        className="absolute top-0 left-0 pointer-events-none rounded-br-full"
        style={{
          width: "clamp(120px,20vw,400px)",
          height: "clamp(120px,20vw,400px)",
          backgroundColor: "var(--accent)",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 sm:mb-16">
          <p
            className="accent-label text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          >
            The difference it makes
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl"
            style={{ color: "var(--text)" }}
          >
            What changes when the
            <br className="hidden sm:block" />
            {" "}routine runs itself.
          </h2>
          <p
            className="mt-4 sm:mt-6 max-w-xl leading-relaxed text-base"
            style={{ color: "var(--text-muted)" }}
          >
            Each of these tools was built from a real problem raised by a Primis team. They&rsquo;re designed to show what&rsquo;s possible here and set the foundation for what comes next.
          </p>
        </div>

        {/* Impact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {impacts.map((item) => (
            <div
              key={item.team}
              className="p-6 sm:p-8 rounded-2xl relative overflow-hidden group flex flex-col"
              style={{
                backgroundColor: "var(--bg-alt)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, var(--accent-low) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <span
                  className="accent-label self-start text-xs font-semibold tracking-widest uppercase"
                >
                  {item.team}
                </span>
                <h3
                  className="mt-3 text-xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {item.headline}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.body}
                </p>
                <div
                  className="mt-6 pt-6 flex items-center justify-center gap-3 flex-wrap text-center"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {item.stat}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-muted)", paddingTop: "4px" }}
                  >
                    {item.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
