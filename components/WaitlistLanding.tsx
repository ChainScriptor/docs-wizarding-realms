"use client";

import type { CSSProperties, SVGProps } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PrivateAccessBanner from "@/components/PrivateAccessBanner";
import WizardingStory from "@/components/WizardingStory";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MessageCircle, X as XIcon } from "lucide-react";
import LightningText from "@/components/ui/lightning-text";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.5 7.8c-1.55-.32-3-1.26-3.87-2.58V15a4.75 4.75 0 1 1-4.75-4.75h.25v2.2h-.25a2.55 2.55 0 1 0 2.55 2.55V2h2.4c.15 1.68 1.5 3.02 3.27 3.16v2.64z" />
  </svg>
);

export default function WaitlistLanding() {
  const [showStory, setShowStory] = useState(false);
  const [viewportScale, setViewportScale] = useState(1);
  const [isWideLayout, setIsWideLayout] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const fireSphereBackground = "#000000";
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Initialize window width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    const updateScale = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      setWindowWidth(width);
      const aspectRatio = width / height;

      // If wide layout (landscape/low height with wide width), use horizontal layout instead of scaling
      // Only activate for desktop/tablet landscape, not mobile portrait
      if (height < 800 && width >= 768 && aspectRatio > 1.3) {
        setIsWideLayout(true);
        // Apply slight scaling for very small heights even in wide layout
        const availableHeight = height - 48 - 64;
        const baseHeight = 700; // Lower baseline for wide layouts
        const minScale = 0.5;
        const ratio = availableHeight / baseHeight;
        const clamped = Math.min(1, Math.max(minScale, ratio));
        setViewportScale(Number(clamped.toFixed(2)));
      } else {
        setIsWideLayout(false);
        // Account for banner (~48px) and footer (~64px)
        const availableHeight = height - 48 - 64;
        const baseHeight = 900; // design baseline (reduced to account for spacing)
        const minScale = 0.3; // More aggressive minimum for very small screens
        const ratio = availableHeight / baseHeight;
        const clamped = Math.min(1, Math.max(minScale, ratio));
        setViewportScale(Number(clamped.toFixed(2)));
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const scaledStyle: CSSProperties = isWideLayout
    ? {}
    : {
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
      className="relative flex h-screen w-full flex-col overflow-y-auto lg:overflow-hidden"
      style={{ background: fireSphereBackground }}
    >
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

        {/* Fixed Wizard Gif - Top Left */}
        {windowWidth >= 1225 && (
          <div className="fixed top-20 left-4 md:left-8 pointer-events-none z-20 hidden sm:block">
            <Image
              src="/wizard.gif"
              alt="Arcane familiar"
              width={110}
              height={110}
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              unoptimized
            />
          </div>
        )}

        {/* Fixed Archon Gif - Top Right */}
        {windowWidth >= 1225 && (
          <div className="fixed top-20 right-4 md:right-8 pointer-events-none z-20 hidden sm:block">
            <Image
              src="/archon.gif"
              alt="Mythical steed"
              width={360}
              height={120}
              className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              unoptimized
            />
          </div>
        )}

        {/* Content Overlay - Positioned at top */}
        <div
          className={`relative z-10 flex flex-1 w-full ${isWideLayout ? 'flex-row items-start gap-6' : 'flex-col items-center'} px-4 pb-20 ${isWideLayout ? 'pt-2' : '-mt-4 sm:-mt-8'}`}
          style={{
            mixBlendMode: "normal",
          }}
        >
          {isWideLayout ? (
            <div className="relative w-full flex flex-col gap-4 px-4">
              {/* Lightning Text Logo - shown in wide layout */}
              <div className="pointer-events-none relative z-30 mb-0 w-full flex justify-center mt-16">
                <div className="w-full max-w-4xl h-20 sm:h-24">
                  <LightningText
                    text="WIZARDING REALMS"
                    size={50}
                    color="#cd96fe"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 text-left w-full pt-4">
                <div
                  className="flex-1 space-y-3 text-2xl md:text-3xl text-white leading-relaxed text-left"
                  style={{
                    fontFamily: "var(--font-body)",
                    textShadow:
                      "0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {/* Main Text - Only selected texts */}
                  <div className="space-y-3">
                    <p className="italic">The owls are already flying.</p>

                    <p className="font-semibold text-indigo-400">
                      The list closes when the moon turns red.
                    </p>

                    <p>
                      Write your name below before someone else claims the realm that was meant for you.
                    </p>

                    <p className="text-lg italic text-white/70">
                      (One realm to rule them all. One token to bind them.)
                    </p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2 items-start">
                      <Button
                        asChild
                        variant="destructive"
                        size="lg"
                        className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.6)]"
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
                    {/* Gifs in random positions below Join the waitlist button - Hidden on mobile */}
                    <div className="relative mt-6 h-32 md:h-40 hidden sm:block">
                      <Image
                        src="/horse.gif"
                        alt="Arcane familiar"
                        width={150}
                        height={150}
                        className="absolute w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] rotate-3"
                        style={{
                          left: '10%',
                          top: '20%',
                        }}
                        unoptimized
                      />
                      <Image
                        src="/wizard2.gif"
                        alt="Archon sentinel"
                        width={150}
                        height={150}
                        className="absolute w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] -rotate-6"
                        style={{
                          right: '15%',
                          bottom: '10%',
                        }}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-auto lg:max-w-xs flex-shrink-0">
                  <BackgroundGradient className="rounded-2xl bg-black/80 p-3 md:p-4 text-white space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <Image src="/early.svg" alt="Early access sigil" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
                      <div>
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60">Early Access</p>
                        <p className="text-xs md:text-sm text-white/70">Summon your invitation</p>
                      </div>
                    </div>
                    <p className="text-base md:text-xl font-semibold">
                      Join our Discord server to get the exclusive Early Birds role for Wizarding Realms!
                    </p>
                    <p className="text-sm md:text-base text-white/70 italic">
                      Be among the first adventurers and unlock special perks , click the invite link now and say
                      WIZARD in the server to claim your badge.
                    </p>
                    <div className="pt-1 text-xs md:text-base text-white/80">
                      Enter your email • Join the waitlist • Guard your chosen realm.
                    </div>
                    <div className="pt-2 flex flex-col sm:flex-row gap-2">
                      <Button
                        asChild
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2"
                      >
                        <a href="https://discord.gg/Dj6B4Zzpn" target="_blank" rel="noreferrer">
                          Join the Discord
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-white/40 text-white hover:bg-white/10 py-2"
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
          ) : (
            <>
              {/* Lightning Text Logo - centered in normal layout */}
              <div className="pointer-events-none relative z-30 mb-0 hidden sm:flex w-full justify-center mt-16 sm:mt-20">
                <div className="w-full max-w-4xl h-24 sm:h-32">
                  <LightningText
                    text="WIZARDING REALMS"
                    size={60}
                    color="#cd96fe"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-full max-w-4xl mx-auto text-center space-y-6">
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
                    className="flex-1 space-y-4 text-2xl md:text-3xl text-white leading-relaxed text-center lg:text-left"
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

                      <p className="text-lg italic text-white/70 pt-1">
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
                      {/* Gifs in random positions below Join the waitlist button - Hidden on mobile */}
                      <div className="relative mt-6 h-32 md:h-40 hidden sm:block">
                        <Image
                          src="/horse.gif"
                          alt="Arcane familiar"
                          width={150}
                          height={150}
                          className="absolute w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] rotate-3"
                          style={{
                            left: '10%',
                            top: '20%',
                          }}
                          unoptimized
                        />
                        <Image
                          src="/wizard2.gif"
                          alt="Archon sentinel"
                          width={150}
                          height={150}
                          className="absolute w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] -rotate-6"
                          style={{
                            right: '15%',
                            bottom: '10%',
                          }}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-auto lg:max-w-xs">
                    <BackgroundGradient className="rounded-2xl bg-black/80 p-3 md:p-4 text-white space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 text-white/80">
                        <Image src="/early.svg" alt="Early access sigil" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
                        <div>
                          <p className="text-xs md:text-lg uppercase tracking-[0.2em] text-white/60">Early Access</p>
                          <p className="text-xs md:text-lg text-white/70">Summon your invitation</p>
                        </div>
                      </div>
                      <p className="text-base md:text-2xl font-semibold">
                        Join our Discord server to get the exclusive Early Birds role for Wizarding Realms!
                      </p>
                      <p className="text-sm md:text-lg text-white/70 italic">
                        Be among the first adventurers and unlock special perks , click the invite link now and say
                        WIZARD in the server to claim your badge.
                      </p>
                      <div className="pt-1 text-xs md:text-lg text-white/80">
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
            </>
          )}
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
    </div >
  );
}
