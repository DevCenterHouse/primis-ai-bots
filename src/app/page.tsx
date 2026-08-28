import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BotSection from "@/components/sections/BotSection";
import ImpactSection from "@/components/sections/ImpactSection";
import { bots } from "@/data/bots";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {bots.map((bot, index) => (
        <BotSection key={bot.id} bot={bot} index={index} />
      ))}
      <ImpactSection />

      {/* What's next */}
      <div
        className="py-14 sm:py-16 px-4 sm:px-6 text-center"
        style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-alt)" }}
      >
        <p className="accent-label text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          What&rsquo;s next
        </p>
        <h3
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--text)" }}
        >
          More bots coming soon.
        </h3>
        <p className="mt-3 text-base max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          These four are just the beginning.
        </p>
      </div>

      <Footer />
    </main>
  );
}
