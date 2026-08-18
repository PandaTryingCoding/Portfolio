"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorTracker() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);

  const softX = useSpring(pointerX, { damping: 28, stiffness: 180, mass: 0.4 });
  const softY = useSpring(pointerY, { damping: 28, stiffness: 180, mass: 0.4 });
  const coreX = useSpring(pointerX, { damping: 40, stiffness: 380, mass: 0.22 });
  const coreY = useSpring(pointerY, { damping: 40, stiffness: 380, mass: 0.22 });

  useEffect(() => {
    const canTrack =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canTrack);

    if (!canTrack) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [pointerX, pointerY]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--cursor-core)_0%,var(--cursor-glow)_40%,transparent_72%)] blur-3xl"
        style={{ x: softX, y: softY }}
        animate={{ opacity: visible ? 0.85 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,var(--cursor-core)_0%,transparent_70%)] blur-md"
        style={{ x: coreX, y: coreY }}
        animate={{ opacity: visible ? 0.7 : 0, scale: visible ? 1 : 0.6 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </div>
  );
}
