import React, { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { LuMenu, LuX, LuMail } from "react-icons/lu";
import logo from "../assets/emporis_logo.webp";
import { lenis, scrollToHash } from "../lib/lenis";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// Sub-sections that should light up their parent link.
const SECTION_IDS = ["home", "products", "embiotin", "about", "edge", "contact"] as const;
const PARENT: Record<string, string> = { embiotin: "products", edge: "about" };

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Anchor chosen in the mobile menu; scrolled to once the dialog's scroll lock is released.
  const pendingHash = useRef<string | null>(null);
  const activeId = useActiveSection(SECTION_IDS);
  const active = PARENT[activeId] ?? activeId;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuChange = (open: boolean) => {
    setMenuOpen(open);
    if (open) lenis?.stop();
    else lenis?.start();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || menuOpen ? "glass-purple" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3 rounded-md">
          <img src={logo} alt="" width={32} height={36} className="h-8 w-auto" />
          <span className="font-display text-xl font-medium tracking-[0.04em] text-lavender-white">
            Emporis Health Care
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative py-2 text-sm tracking-wide transition-colors hover:text-lavender-white ${
                    isActive ? "text-lavender-white" : "text-lavender-white/75"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-magenta-vibrant transition-transform duration-300 ease-out-expo ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <Dialog.Root open={menuOpen} onOpenChange={handleMenuChange}>
          <Dialog.Trigger
            className="grid size-11 place-items-center rounded-full text-lavender-white md:hidden"
            aria-label="Open menu"
          >
            <LuMenu className="size-6" aria-hidden />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-deep/60 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
            <Dialog.Content
              aria-describedby={undefined}
              onCloseAutoFocus={(e) => {
                const hash = pendingHash.current;
                if (!hash) return;
                e.preventDefault();
                pendingHash.current = null;
                scrollToHash(hash);
              }}
              className="fixed inset-x-3 top-3 z-50 rounded-3xl bg-purple-brand p-6 text-lavender-white shadow-2xl shadow-ink-deep/40 data-[state=closed]:animate-sheet-out data-[state=open]:animate-sheet-in"
            >
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-xl">Emporis Health Care</Dialog.Title>
                <Dialog.Close className="grid size-11 place-items-center rounded-full bg-white/10" aria-label="Close menu">
                  <LuX className="size-5" aria-hidden />
                </Dialog.Close>
              </div>
              <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        pendingHash.current = href;
                        handleMenuChange(false);
                      }}
                      className="flex items-center justify-between py-4 font-display text-3xl font-light"
                    >
                      {label}
                      {active === href.slice(1) && <span className="size-2 rounded-full bg-magenta-vibrant" aria-hidden />}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@emporishealthcare.com"
                className="mt-6 inline-flex items-center gap-2 text-sm text-lavender-white/75"
              >
                <LuMail className="size-4" aria-hidden />
                info@emporishealthcare.com
              </a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
};

export default Navbar;
