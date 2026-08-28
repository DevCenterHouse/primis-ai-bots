"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Meeting Minutes",  href: "#bot-01" },
  { label: "Business Cards",   href: "#bot-02" },
  { label: "Email Analyzer",   href: "#bot-03" },
  { label: "Policy Bot",       href: "#bot-04" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "var(--bg-header)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://primisbank.com/wp-content/uploads/2024/08/primisbank-logo.png"
              alt="Primis Bank"
              className="logo-dark"
              style={{ height: "24px", width: "auto" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/primis-logo-light.png"
              alt="Primis Bank"
              className="logo-light"
              style={{ height: "24px", width: "auto" }}
            />
            <span className="on-accent text-xs font-bold px-2 py-0.5 rounded tracking-wide">
              AI
            </span>
          </div>

          {/* Desktop nav — only at lg+ to avoid tablet squeeze */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium tracking-wide"
                >
                  <span className="text-xs opacity-50 mr-1">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile/tablet right: theme toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              style={{ color: "var(--text)" }}
            >
              <span className="block w-5 h-px" style={{ backgroundColor: "currentColor" }} />
              <span className="block w-5 h-px" style={{ backgroundColor: "currentColor" }} />
              <span className="block w-3 h-px" style={{ backgroundColor: "currentColor" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ backgroundColor: "var(--bg)" }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-4 h-16 shrink-0"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span
              className="accent-label text-xs font-bold tracking-[0.2em] uppercase"
            >
              Menu
            </span>
            <button
              onClick={close}
              aria-label="Close navigation menu"
              className="w-10 h-10 flex items-center justify-center"
              style={{ color: "var(--text-muted)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16" />
                <line x1="16" y1="2" x2="2" y2="16" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col flex-1 justify-center px-8 gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-center gap-4 py-5 group"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="accent-label text-xs font-bold tracking-widest"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-2xl font-bold tracking-tight transition-colors duration-200"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
