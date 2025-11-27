"use client";

import type { CSSProperties, SVGProps } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FireSphere } from "@/components/ui/fire-sphere";
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
  const [viewportScale, setViewportScale] = useState(1);
  const fireSphereBackground = "#000000";
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateScale = () => {
      const height = window.innerHeight;
      const baseHeight = 960; // design baseline
      const minScale = 0.35; // Lower minimum for very small screens
      const ratio = height / baseHeight;
      const clamped = Math.min(1, Math.max(minScale, ratio));
      setViewportScale(Number(clamped.toFixed(2)));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const scaledStyle: CSSProperties = {
    transform: `scale(${viewportScale})`,
    transformOrigin: "top center",
    transition: "transform 200ms ease",
  };

  if (showStory) {
    return (
      <div
        className="relative min-h-screen w-full overflow-x-hidden sm:overflow-hidden"
        style={{ background: fireSphereBackground }}
      >
        {/* Private Access Banner - Full width, outside scaled container */}
        <PrivateAccessBanner />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 pt-6 sm:pt-10" style={scaledStyle}>
          {/* Navigation Links */}
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
          <div className="w-full pt-[180px] sm:pt-[200px]">
            <WizardingStory scale={viewportScale} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden sm:overflow-hidden"
      style={{ background: fireSphereBackground }}
    >
      {/* Fire Sphere Background */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[160vh]">
          <FireSphere className="h-full w-full opacity-100" />
        </div>
      </div>

      {/* Private Access Banner - Full width, outside scaled container */}
      <PrivateAccessBanner />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 pb-16 pt-6 sm:pt-10" style={scaledStyle}>
        {/* Navigation Links */}
        <div className="absolute top-[56px] left-0 right-0 z-40 px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 mx-auto w-full max-w-3xl">
            <button
              onClick={() => setShowStory(false)}
              className="text-sm md:text-base transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-cinzel)",
                color: "#FFB84D",
                textShadow: "0 0 10px rgba(255, 184, 77, 0.5), 0 0 20px rgba(255, 184, 77, 0.3)"
              }}
            >
              Join the Waitlist
            </button>
            <div className="h-5 w-px bg-white/20" />
            <button
              onClick={() => setShowStory(true)}
              className="text-sm md:text-base transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-cinzel)",
                color: "#FFB84D",
                textShadow: "0 0 10px rgba(255, 184, 77, 0.5), 0 0 20px rgba(255, 184, 77, 0.3)"
              }}
            >
              The Wizarding Realms Story
            </button>
          </div>
        </div>

        {/* Logo overlay */}
        <div className="pointer-events-none relative z-30 mt-16 mb-0 hidden sm:flex w-full justify-center sm:mt-20">
          <Image
            src="/hero1.svg"
            alt="Wizarding Realms logo"
            width={200}
            height={80}
            className="h-16 w-auto sm:h-72"
            priority
          />
        </div>

        {/* Content Overlay - Positioned at top */}
        <div
          className="relative z-10 flex flex-1 w-full flex-col items-center px-4 pb-16 pt-0"
          style={{
            mixBlendMode: "normal",
          }}
        >
          <div className="relative w-full max-w-4xl mx-auto text-center space-y-6">
            {/* Left familiars - Desktop */}
            <div className="pointer-events-none absolute -left-16 -top-24 hidden flex-col gap-8 lg:-left-48 lg:-top-16 lg:gap-12 xl:flex">
              <Image
                src="/wizard.gif"
                alt="Arcane familiar"
                width={110}
                height={110}
                className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] -mt-16 lg:-mt-20"
                unoptimized
                priority
              />
              <Image
                src="/horse.gif"
                alt="Arcane familiar"
                width={110}
                height={110}
                className="w-36 h-36 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] rotate-3"
                unoptimized
                priority
              />
            </div>

            {/* Right familiars - Desktop */}
            <div className="pointer-events-none absolute -right-16 -top-28 hidden flex-col gap-8 lg:-right-48 lg:-top-32 lg:gap-12 xl:flex items-end">
              <Image
                src="/archon.gif"
                alt="Mythical steed"
                width={360}
                height={120}
                className="w-44 h-44 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] -mt-16 lg:-mt-20"
                unoptimized
                priority
              />
              <Image
                src="/wizard2.gif"
                alt="Archon sentinel"
                width={120}
                height={120}
                className="w-36 h-36 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] -rotate-6"
                unoptimized
                priority
              />
            </div>

            {/* Mobile familiar highlight */}
            <div className="flex sm:hidden items-center justify-center pt-28 mb-4">
              <Image
                src="/horse.gif"
                alt="Arcane familiar"
                width={120}
                height={120}
                className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                unoptimized
                priority
              />
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-6 text-left w-full">
              <div
                className="flex-1 space-y-4 text-base md:text-lg text-white leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: "var(--font-body)",
                  textShadow:
                    "0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                {/* Main Text - Only selected texts */}
                <div className="space-y-4">
                  <p className="italic">The owls are already flying.</p>

                  <p className="font-semibold text-indigo-400">
                    The list closes when the moon turns red.
                  </p>

                  <p>
                    Write your name below before someone else claims the realm that was meant for you.
                  </p>

                  <p className="text-xs italic text-white/70 pt-1">
                    (One realm to rule them all. One token to bind them.)
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
                    <Button
                      asChild
                      variant="destructive"
                      size="lg"
                      className="w-full sm:w-auto px-6 py-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.6)]
"
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
              </div>

              <div className="w-full lg:w-auto lg:max-w-xs">
                <BackgroundGradient className="rounded-2xl bg-black/80 p-4 text-white space-y-3">
                  <div className="flex items-center gap-2 text-white/80">
                    <Image src="/early.svg" alt="Early access sigil" width={32} height={32} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">Early Access</p>
                      <p className="text-xs text-white/70">Summon your invitation</p>
                    </div>
                  </div>
                  <p className="text-base font-semibold">
                    Join our Discord server to get the exclusive Early Birds role for Wizarding Realms!
                  </p>
                  <p className="text-xs text-white/70 italic">
                    Be among the first adventurers and unlock special perks , click the invite link now and say
                    WIZARD in the server to claim your badge.
                  </p>
                  <div className="pt-1 text-xs text-white/80">
                    Enter your email • Join the waitlist • Guard your chosen realm.
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <Button
                      asChild
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2"
                    >
                      <a href="https://discord.gg/Dj6B4Zzpn" target="_blank" rel="noreferrer">
                        Join the Discord
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-white/40 text-white hover:bg-white/10 text-sm py-2"
                    >
                      <a href="https://x.com/wizardingrealms?s=11" target="_blank" rel="noreferrer">
                        Join the X
                      </a>
                    </Button>
                  </div>
                </BackgroundGradient>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom, full width */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 w-full border-t border-white/10 bg-black/50 px-6 py-4 backdrop-blur">
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
