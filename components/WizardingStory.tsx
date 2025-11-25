"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FireSphere } from "@/components/ui/fire-sphere";
import { Button } from "@/components/ui/button";

type StoryBlock =
    | { type: "heading"; content: string }
    | { type: "paragraph"; content: React.ReactNode }
    | { type: "list"; intro?: React.ReactNode; items: string[] };

const videoSequence = ["/5.mp4"];

const storyBlocks: StoryBlock[] = [
    {
        type: "paragraph",
        content:
            "There were two brothers. The elder quarreled constantly with his father because of his anger, drunkenness, and hatred for everyone. One day, he left home and, inside a mysterious cave, discovered a dark power that transformed him into the Archon, God of Darkness. The younger followed him, hoping to bring him back; instead, he too found the source of magic. With a pure heart, this power turned him into the Weaver, God of Light.",
    },
    {
        type: "heading",
        content: "The Hexagon’s Curse · The Breaking of the Hexagon",
    },
    {
        type: "paragraph",
        content: (
            <>
                Thirty years ago, the Final War shattered the world. An ancient Archon unleashed the Hexagon’s Curse, fracturing{" "}
                <span className="text-amber-300">15,555 Floating Realms</span> above the Black Lake. The Hexagon—a sacred emblem
                of six magical affinities (Light, Fire, Frost, Nature, Earth, Shadow)—was broken, spreading Whispering Mist that
                hides powerful spells and traps. The sky fell silent. Mana now only flows through Ley Lines connecting the
                affinities. The Floating Realms drift, tied together by the Mystic Railway.
            </>
        ),
    },
    {
        type: "list",
        intro: <>Across the Grand Map of Mysteries, new zones have appeared:</>,
        items: [
            "Highwizard Academy: Center of Light and Fire, where wizards rebuild society.",
            "Arkanum City: Neutral ground, markets for Earth and Nature.",
            "Dark Citadel of Evil: Lair of Shadow and Frost monsters.",
            "Forbidden Monster Forest: Wild affinity clashes.",
            "Whispering Mist: Chaotic zone, a trial for wizard affinities.",
        ],
    },
    {
        type: "heading",
        content: "The Wizards: Hexagon Weavers",
    },
    {
        type: "paragraph",
        content:
            "New wizards awaken, bound to the primal affinity they choose from the Hexagon. Guilds—Flameweavers, Earthshapers, Lightweavers, and more—battle in Affinity Wars, replacing old Houses. Spellcasting relies on mastering your affinity; matched spells are empowered, but off-affinity spells weaken one’s spirit, following ancient lore: resisting your true nature drains your soul.",
    },
    {
        type: "heading",
        content: "The Monsters: Hexagon Corruptors",
    },
    {
        type: "paragraph",
        content:
            "Monsters imitate the six affinities but corrupt the magic. For example, the Shadow Dragon strengthens Shadow and weakens Light. Raids pit wizards against monsters that steal mana from mismatched affinities. Each beast’s traits blend its nature with corrupted affinities, creating depth and danger.",
    },
    {
        type: "heading",
        content: "The Eternal Conflict",
    },
    {
        type: "paragraph",
        content:
            "Faction Lock divides the minting: wizards join their affinity guilds, monsters form corrupted hordes in endless rivalry. PvP and quests depend on affinity matchups and regional boosts (Fire Wizards excel in Fire Forest, etc.). Guild battles are 6v6, with hybrid builds (e.g., Fire/Frost) offering risky and rewarding playstyles, like a Shadow wizard experimenting with Light magic. Seasonal changes reshape the map and affinity fusions. Winning factions earn 70% of the game currency $WIZ.",
    },
    {
        type: "heading",
        content: "The Hexagon Whispers",
    },
    {
        type: "paragraph",
        content: (
            <span className="italic text-white/80">
                The Hexagon whispers. Your chosen affinity determines your power or your weakness. Light or Shadow? Guild or
                Horde? The choice is yours. Will you weave the destiny of magic, or fall into corruption?
            </span>
        ),
    },
];

function VideoPlayer() {
    const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
    const [activePlayer, setActivePlayer] = useState<0 | 1>(0);
    const playerSourcesRef = useRef<[number, number]>([
        0,
        videoSequence.length > 1 ? 1 : 0,
    ]);

    useEffect(() => {
        const players = videoRefs.map((ref) => ref.current);
        if (players.some((player) => !player)) return;

        const assignSource = (player: HTMLVideoElement, sequenceIndex: number, shouldPlay: boolean) => {
            player.src = videoSequence[sequenceIndex];
            player.load();
            player.currentTime = 0;
            if (shouldPlay) {
                player.play().catch(() => { });
            } else {
                player.pause();
            }
        };

        assignSource(players[0]!, playerSourcesRef.current[0], true);
        if (videoSequence.length > 1) {
            assignSource(players[1]!, playerSourcesRef.current[1], false);
        }

        const handleEnded = (playerIndex: 0 | 1) => () => {
            const nextPlayerIndex = playerIndex === 0 ? 1 : 0;
            const currentPlayer = videoRefs[playerIndex].current;
            const nextPlayer = videoRefs[nextPlayerIndex].current;
            if (!currentPlayer || !nextPlayer) return;

            const newSequenceIndex = (playerSourcesRef.current[playerIndex] + 1) % videoSequence.length;
            playerSourcesRef.current[nextPlayerIndex] = newSequenceIndex;

            const startNext = () => {
                nextPlayer.currentTime = 0;
                nextPlayer.play().catch(() => { });
                setActivePlayer(nextPlayerIndex);
                nextPlayer.removeEventListener("canplay", startNext);
                playerSourcesRef.current[playerIndex] = (newSequenceIndex + 1) % videoSequence.length;
                currentPlayer.src = "";
                currentPlayer.load();
            };

            nextPlayer.addEventListener("canplay", startNext, { once: true });
            nextPlayer.src = videoSequence[newSequenceIndex];
            nextPlayer.load();
        };

        const playerA = players[0]!;
        const playerB = players[1]!;
        playerA.onended = handleEnded(0);
        playerB.onended = handleEnded(1);

        return () => {
            playerA.onended = null;
            playerB.onended = null;
        };
    }, []);

    return (
        <div className="relative w-full rounded-3xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            {[0, 1].map((idx) => {
                const isActive = activePlayer === idx;
                return (
                    <video
                        key={idx}
                        ref={videoRefs[idx]}
                        muted
                        playsInline
                        preload="auto"
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            }`}
                    />
                );
            })}
            <div className="pt-[56.25%]" aria-hidden="true" />
        </div>
    );
}

export default function WizardingStory() {
    const [status, setStatus] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio("/hexagon_chronicle.wav");
        audio.preload = "auto";
        const handleEnded = () => {
            setIsPlaying(false);
            setStatus("The chronicle has finished whispering.");
        };
        const handlePause = () => {
            // Ignore pause events triggered by ending
            if (!audio.ended) {
                setIsPlaying(false);
                setStatus("Narration paused.");
            }
        };
        audio.addEventListener("ended", handleEnded);
        audio.addEventListener("pause", handlePause);
        audioRef.current = audio;
        return () => {
            audio.pause();
            audio.removeEventListener("ended", handleEnded);
            audio.removeEventListener("pause", handlePause);
        };
    }, []);

    const handleNarrationToggle = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            return;
        }
        try {
            await audio.play();
            setIsPlaying(true);
            setStatus("Narration spell active...");
        } catch (error) {
            setStatus("Unable to invoke the narration. Please check your sound.");
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10 md:px-10">
            <div className="absolute inset-0 -z-10">
                <FireSphere className="h-full w-full opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black" />
            </div>

            <div className="relative w-full max-w-5xl rounded-[32px] border border-white/10 bg-black/70 shadow-[0_0_60px_rgba(255,50,0,0.25)] backdrop-blur-3xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500" />
                <div className="p-6 md:p-10 space-y-8 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-2"
                    >
                        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Ancient Lore Archive</p>
                        <h1
                            className="text-4xl md:text-5xl font-semibold text-amber-200 drop-shadow-lg"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            The Wizarding Realms Chronicle
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <VideoPlayer />
                    </motion.div>

                    <motion.div
                        className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8 max-h-[420px] overflow-y-auto space-y-6 text-base md:text-lg leading-relaxed scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        {storyBlocks.map((block, idx) => {
                            if (block.type === "heading") {
                                return (
                                    <h3
                                        key={`heading-${idx}`}
                                        className="text-2xl font-semibold text-white/90"
                                        style={{ fontFamily: "var(--font-cinzel)" }}
                                    >
                                        {block.content}
                                    </h3>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <div key={`list-${idx}`} className="space-y-2 text-white/80">
                                        {block.intro && <p>{block.intro}</p>}
                                        <ul className="list-disc space-y-1 pl-6">
                                            {block.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }
                            return (
                                <p key={`paragraph-${idx}`} className="text-white/90">
                                    {block.content}
                                </p>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-3 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button
                            onClick={handleNarrationToggle}
                            className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-rose-600 px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(255,76,41,0.4)] transition hover:scale-105"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <span className={`inline-block h-2 w-2 rounded-full ${isPlaying ? "bg-emerald-300 animate-pulse" : "bg-white"}`} />
                                {isPlaying ? "Stop the Chronicle" : "Listen to the Chronicle"}
                            </span>
                            <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
                        </Button>
                        {status && <p className="text-sm italic text-white/70">{status}</p>}
                        <audio ref={audioRef} src="/hexagon_chronicle.wav" className="hidden" preload="auto" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

