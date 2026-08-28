import type { Bot } from "@/data/bots";
import FlowSteps from "@/components/ui/FlowSteps";
import FeatureTag from "@/components/ui/FeatureTag";

interface BotSectionProps {
  bot: Bot;
  index: number;
}

export default function BotSection({ bot, index }: BotSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={`bot-${bot.number}`}
      className="relative py-8 sm:py-16 md:py-24 overflow-hidden"
      style={{
        backgroundColor: isEven ? "var(--bg-alt)" : "var(--bg)",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: "64px",
      }}
    >
      {/* Watermark number — hidden on small screens to avoid clutter */}
      <div
        className="hidden sm:block absolute right-4 top-4 font-bold select-none pointer-events-none"
        style={{
          fontSize: "clamp(80px,14vw,280px)",
          color: "var(--watermark)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {bot.number}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <span className="accent-label text-xs font-bold tracking-[0.2em] uppercase">
            {bot.number}
          </span>
          <div
            className="h-px w-8 sm:w-10"
            style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
          />
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {bot.category}
          </span>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info column */}
          <div className={`flex flex-col gap-5 sm:gap-6 ${!isEven ? "lg:order-2" : ""}`}>
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {bot.name}
              </h2>
              <p
                className="mt-3 text-lg sm:text-xl font-medium"
                style={{ color: "var(--accent-text)" }}
              >
                {bot.tagline}
              </p>
            </div>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {bot.description}
            </p>

            {/* Platform badge + Teams CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="platform-pill text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                {bot.platform}
              </span>
              {bot.teamsUrl && (
                <a
                  href={bot.teamsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teams-btn inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200"
                >
                  {/* Microsoft Teams icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14.5 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#6264A7"/>
                    <path d="M18 8h-7a1 1 0 0 0-1 1v6a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V9a1 1 0 0 0-1-1Z" fill="#6264A7"/>
                    <path d="M8.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#6264A7" opacity=".7"/>
                    <path d="M11 11H6a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z" fill="#6264A7" opacity=".7"/>
                  </svg>
                  Open in Teams
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {bot.tags.map((tag) => (
                <FeatureTag key={tag} label={tag} />
              ))}
            </div>

            {/* Outputs */}
            <div
              className="mt-1 p-4 sm:p-5 rounded-xl"
              style={{
                backgroundColor: "var(--bg-panel)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Outputs
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bot.outputs.map((output) => (
                  <div key={output.label} className="flex items-start gap-2">
                    <span className="text-base">{output.icon}</span>
                    <span
                      className="text-sm sm:text-base font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {output.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flow column */}
          <div className={!isEven ? "lg:order-1" : ""}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              How it works
            </p>
            <div
              className="p-4 sm:p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <FlowSteps steps={bot.flowSteps} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-px"
        style={{
          width: `${20 + index * 15}%`,
          backgroundColor: "var(--accent)",
          opacity: 0.25,
        }}
      />
    </section>
  );
}
