"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/Button";

const sectionIds = ["services", "results", "pricing", "flow", "faq", "contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <PhoneCall
              className={`w-8 h-8 ${isScrolled ? "text-accent-700" : "text-white"}`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "gradient-text" : "text-white"
              }`}
            >
              AIコーラー
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? isScrolled
                      ? "text-accent-700"
                      : "text-white"
                    : isScrolled
                      ? "text-text-secondary hover:text-text-primary"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              href="#contact"
            >
              無料で100コール試す
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? "text-text-primary" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-text-primary" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-16 bg-white z-40 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-primary py-3 border-b border-border"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="md"
                href="#contact"
                className="mt-4"
              >
                お問い合わせ
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
