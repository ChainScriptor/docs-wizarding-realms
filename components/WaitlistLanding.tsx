"use client";

import type { SVGProps } from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PrivateAccessBanner from "@/components/PrivateAccessBanner";
import WizardingStory from "@/components/WizardingStory";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MessageCircle, X as XIcon } from "lucide-react";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.5 7.8c-1.55-.32-3-1.26-3.87-2.58V15a4.75 4.75 0 1 1-4.75-4.75h.25v2.2h-.25a2.55 2.55 0 1 0 2.55 2.55V2h2.4c.15 1.68 1.5 3.02 3.27 3.16v2.64z" />
  </svg>
);

export default function WaitlistLanding() {
  const [showStory, setShowStory] = useState(false);
  const fireSphereBackground = "#000000";
  const currentYear = new Date().getFullYear();

  if (showStory) {
    return (
      <div
        className="relative min-h-screen w-full overflow-x-hidden sm:overflow-hidden"
        style={{ background: fireSphereBackground }}
      >
        <PrivateAccessBanner />

        <div className="absolute top-[56px] left-0 right-0 z-40 px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 mx-auto w-full max-w-3xl">
            <button
              onClick={() => setShowStory(false)}
              className="text-base md:text-lg transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-cinzel)",
                color: "#FFB84D",
              }}
            >
              Join the Waitlist
            </button>
            <div className="h-6 w-px bg-white/20" />
            <button
              onClick={() => setShowStory(true)}
              className="text-base md:text-lg transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-cinzel)",
                color: "#FFB84D",
              }}
            >
              The Wizarding Realms Story
            </button>
          </div>
        </div>
        <div className="pt-[180px] sm:pt-[200px]">
          <WizardingStory />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden sm:overflow-hidden"
      style={{ background: fireSphereBackground }}
    >
      <PrivateAccessBanner />

      <div className="absolute top-[56px] left-0 right-0 z-40 px-4 md:px-8">
        <div className="flex items-center justify-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 mx-auto w-full max-w-3xl">
          <button
            onClick={() => setShowStory(false)}
            className="text-base md:text-lg transition-colors duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-cinzel)",
              color: "#FFB84D",
              textShadow: "0 0 10px rgba(255, 184, 77, 0.5), 0 0 20px rgba(255, 184, 77, 0.3)",
            }}
          >
            Join the Waitlist
          </button>
          <div className="h-6 w-px bg-white/20" />
          <button
            onClick={() => setShowStory(true)}
            className="text-base md:text-lg transition-colors duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-cinzel)",
              color: "#FFB84D",
              textShadow: "0 0 10px rgba(255, 184, 77, 0.5), 0 0 20px rgba(255, 184, 77, 0.3)",
            }}
          >
            The Wizarding Realms Story
          </button>
        </div>
      </div>

      <div
        className="relative z-10 flex flex-1 flex-col items-center px-4 w-full"
        style={{
          mixBlendMode: "normal",
          paddingTop: "clamp(100px, 12vh, 180px)",
          paddingBottom: "clamp(24px, 4vh, 60px)",
        }}
      >
        {/* --- Κύρια γραμμή τριών στηλών --- */}
        <div className="w-full max-w-7xl mx-auto flex flex-row items-start justify-between" style={{ marginBottom: "clamp(16px, 2vh, 32px)" }}>
          {/* ΑΡΙΣΤΕΡΗ ΣΤΗΛΗ */}
          <div className="flex flex-col items-start text-left flex-1 min-w-0 pr-4">
            <div
              className="text-lg md:text-xl text-white leading-relaxed flex flex-col"
              style={{
                fontFamily: "var(--font-body)",
                textShadow:
                  "0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.8)",
                gap: "clamp(8px, 1.5vh, 20px)",
              }}
            >
              <p className="italic">The owls are already flying.</p>
              <p className="font-semibold text-indigo-400">
                The list closes when the moon turns red.
              </p>
              <p>
                Write your name below before someone else claims the realm that was meant for you.
              </p>
              <p className="text-sm italic text-white/70 pt-2">
                (One realm to rule them all. One token to bind them.)
              </p>
            </div>
            <div style={{ marginTop: "clamp(12px, 2vh, 24px)" }}>
              <Button
                asChild
                variant="destructive"
                size="lg"
                className="px-8 py-6 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.6)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe6l6PcwF-naSLRVm1RXDCkxMV5oq-FZdR57pzwkvs5e6mc6Q/viewform?usp=dialog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the waitlist
                </a>
              </Button>
            </div>
          </div>
          {/* ΚΕΝΤΡΙΚΟ LOGO */}
          <div className="flex-shrink-0 flex items-center justify-center px-4" style={{ width: "clamp(260px, 30vw, 520px)" }}>
            <Image
              src="/hero1.svg"
              alt="Wizarding Realms"
              width={850}
              height={200}
              className="h-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
              style={{ width: "100%" }}
              priority
            />
          </div>
          {/* ΔΕΞΙΑ ΚΑΡΤΑ */}
          <div className="flex flex-col items-end text-right flex-shrink-0 min-w-[300px] pr-4">
            <BackgroundGradient className="w-[340px] rounded-3xl bg-black/80 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <Image src="/early.svg" alt="Early access sigil" width={48} height={48} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">Early Access</p>
                  <p className="text-xs text-white/70">Summon your invitation</p>
                </div>
              </div>
              <p className="text-base font-semibold">
                Join our Discord server to get the exclusive Early Birds role for Wizarding Realms!
              </p>
              <p className="text-xs text-white/70 italic">
                Unlock special perks — click the invite link now and say WIZARD in the server to claim your badge.
              </p>
              <div className="text-[11px] text-white/80">
                Enter your email • Join the waitlist • Guard your chosen realm.
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  <a href="https://discord.gg/Dj6B4Zzpn" target="_blank" rel="noreferrer">
                    Join the Discord
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/40 text-white text-sm hover:bg-white/10"
                >
                  <a href="https://x.com/wizardingrealms?s=11" target="_blank" rel="noreferrer">
                    Join the X
                  </a>
                </Button>
              </div>
            </BackgroundGradient>
          </div>
        </div>
        {/* --- GIFs ROW --- */}
        <div className="hidden sm:flex items-center justify-center w-full max-w-[1200px] mx-auto px-4 my-12" style={{ gap: "clamp(64px, 10vw, 160px)" }}>
          <Image
            src="/wizard.gif"
            alt="Arcane familiar"
            width={110}
            height={110}
            className="h-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            style={{ width: "clamp(120px, 12vw, 220px)" }}
            unoptimized
            priority
          />
          <Image
            src="/horse.gif"
            alt="Arcane familiar"
            width={110}
            height={110}
            className="h-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] rotate-3"
            style={{ width: "clamp(140px, 14vw, 260px)" }}
            unoptimized
            priority
          />
          <Image
            src="/archon.gif"
            alt="Mythical steed"
            width={360}
            height={120}
            className="h-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            style={{ width: "clamp(140px, 14vw, 240px)" }}
            unoptimized
            priority
          />
          <Image
            src="/wizard2.gif"
            alt="Archon sentinel"
            width={120}
            height={120}
            className="h-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] -rotate-6"
            style={{ width: "clamp(120px, 12vw, 240px)" }}
            unoptimized
            priority
          />
        </div>
      </div>
      <footer className="relative z-20 mt-auto w-full border-t border-white/10 bg-black/50 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-white/60 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Wizarding Realms is a product of Wizarding Industries © {currentYear}</p>
          <div className="flex items-center gap-4 text-white/80">
            <a
              href="https://x.com/wizardingrealms?s=11"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <span className="sr-only">X</span>
              <XIcon className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://discord.gg/Dj6B4Zzpn"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <span className="sr-only">Discord</span>
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@wizardingrealms"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <span className="sr-only">TikTok</span>
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
