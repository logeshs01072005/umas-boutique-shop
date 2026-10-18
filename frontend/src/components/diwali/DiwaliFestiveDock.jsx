import React, { useState } from "react";
import { Volume2, VolumeX, Sparkles, Flame, Rocket, Disc, HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
import { diwaliAudio } from "./DiwaliAudio";

export function DiwaliFestiveDock({
  onLaunchSkyShot,
  onLaunchAnar,
  onLaunchChakra,
  onLaunchLadi,
  autoLaunch,
  setAutoLaunch,
  sparklerActive,
  setSparklerActive,
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeNotice, setActiveNotice] = useState("");

  const showToast = (msg) => {
    setActiveNotice(msg);
    setTimeout(() => setActiveNotice(""), 2500);
  };

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    diwaliAudio.setMuted(next);
    if (!next) {
      diwaliAudio.playTempleBell();
      showToast("Festive Audio Enabled 🔔");
    } else {
      showToast("Audio Muted 🔇");
    }
  };

  const handleSkyShot = () => {
    onLaunchSkyShot?.();
    showToast("Sky Shot Rocket Launched! 🚀✨");
  };

  const handleAnar = () => {
    onLaunchAnar?.();
    showToast("Flower Pot (Anar) Ignited! 🎆✨");
  };

  const handleChakra = () => {
    onLaunchChakra?.();
    showToast("Ground Chakra Spinning! 🌀🔥");
  };

  const handleLadi = () => {
    onLaunchLadi?.();
    showToast("100-Wala Red Crackers Bursting! 🧨💥");
  };

  const toggleSparkler = () => {
    const next = !sparklerActive;
    setSparklerActive?.(next);
    showToast(next ? "Sparkler Mode: Move cursor to sparkle! ✨" : "Sparkler Mode Off");
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 max-w-[95vw] pointer-events-auto">
      {/* Toast Notice */}
      {activeNotice && (
        <div className="mb-2 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-950/90 text-amber-200 border border-amber-400/60 rounded-full text-xs font-semibold shadow-lg shadow-amber-900/40 backdrop-blur-md animate-bounce">
            {activeNotice}
          </span>
        </div>
      )}

      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-900 via-amber-800 to-yellow-800 border-2 border-amber-400/80 rounded-full shadow-2xl shadow-amber-500/30 text-amber-100 font-bold text-xs tracking-wider uppercase hover:scale-105 transition-all"
          title="Open Diwali Cracker Bar"
        >
          <span className="text-base animate-pulse">🪔</span>
          <span>Diwali Crackers</span>
          <ChevronUp size={15} />
        </button>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-gradient-to-r from-stone-950/95 via-amber-950/95 to-red-950/95 border-2 border-amber-400/70 rounded-full shadow-2xl shadow-amber-500/25 backdrop-blur-xl">
          {/* Collapse Button */}
          <button
            onClick={() => setIsCollapsed(true)}
            className="p-1.5 text-amber-300/80 hover:text-amber-200 transition-colors rounded-full hover:bg-white/10"
            title="Minimize"
          >
            <ChevronDown size={16} />
          </button>

          {/* Label / Diya */}
          <div className="hidden lg:flex items-center gap-1 px-2 border-r border-amber-500/30 text-amber-300 font-bold text-xs tracking-wider uppercase">
            <span className="text-base">🪔</span>
            <span>Crackers Dock</span>
          </div>

          {/* Cracker Trigger 1: Sky Shot */}
          <button
            onClick={handleSkyShot}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-xs rounded-full shadow-md shadow-orange-500/30 transition-all transform hover:scale-105 active:scale-95"
            title="Launch Rocket Sky Shot"
          >
            <Rocket size={14} className="rotate-45" />
            <span className="hidden sm:inline">Sky Shot</span>
            <span className="sm:hidden">Rocket</span>
          </button>

          {/* Cracker Trigger 2: Anar / Flower Pot */}
          <button
            onClick={handleAnar}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-stone-950 font-bold text-xs rounded-full shadow-md shadow-yellow-500/30 transition-all transform hover:scale-105 active:scale-95"
            title="Ignite Flower Pot (Anar)"
          >
            <Flame size={14} />
            <span className="hidden sm:inline">Anar</span>
            <span className="sm:hidden">Pot</span>
          </button>

          {/* Cracker Trigger 3: Chakra */}
          <button
            onClick={handleChakra}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-xs rounded-full shadow-md shadow-red-500/30 transition-all transform hover:scale-105 active:scale-95"
            title="Spin Ground Chakra"
          >
            <Disc size={14} className="animate-spin" />
            <span className="hidden sm:inline">Chakra</span>
            <span className="sm:hidden">Wheel</span>
          </button>

          {/* Cracker Trigger 4: Ladi */}
          <button
            onClick={handleLadi}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-red-800 hover:bg-red-700 text-amber-200 font-bold text-xs rounded-full border border-red-500/40 transition-all transform hover:scale-105 active:scale-95"
            title="100-Wala Red Crackers"
          >
            <span>🧨</span>
            <span className="hidden sm:inline">Ladi</span>
          </button>

          {/* Sparkler Toggle */}
          <button
            onClick={toggleSparkler}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full font-bold text-xs transition-all ${
              sparklerActive
                ? "bg-amber-300 text-stone-950 shadow-md shadow-amber-300/40"
                : "bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30"
            }`}
            title="Toggle cursor sparkler trail"
          >
            <Sparkles size={14} />
            <span className="hidden md:inline">Sparkler</span>
          </button>

          {/* Divider */}
          <div className="h-5 w-px bg-amber-500/30 mx-0.5" />

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full transition-all ${
              !isMuted
                ? "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
                : "bg-stone-800 text-stone-400 hover:text-stone-300"
            }`}
            title={!isMuted ? "Mute Cracker Sounds" : "Enable Cracker Sounds"}
          >
            {!isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Auto Sky Shots Toggle */}
          <button
            onClick={() => {
              const next = !autoLaunch;
              setAutoLaunch?.(next);
              showToast(next ? "Auto Sky Shots: Active 🎆" : "Auto Sky Shots: Paused");
            }}
            className={`p-2 rounded-full transition-all ${
              autoLaunch
                ? "bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30"
                : "bg-stone-800 text-stone-500 hover:text-stone-300"
            }`}
            title={autoLaunch ? "Pause Auto Sky Shots" : "Resume Auto Sky Shots"}
          >
            <span className="text-xs">🎆</span>
          </button>
        </div>
      )}
    </div>
  );
}
