"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

function shortestAngle(from: number, to: number) {
  const delta = ((to - from + 540) % 360) - 180;
  return from + delta;
}

export function CursorTracker() {
  const { resolvedTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pointerX = useMotionValue(-240);
  const pointerY = useMotionValue(-240);
  const rotation = useMotionValue(45);

  const glowX = useSpring(pointerX, { damping: 26, stiffness: 160, mass: 0.45 });
  const glowY = useSpring(pointerY, { damping: 26, stiffness: 160, mass: 0.45 });
  const iconX = useSpring(pointerX, { damping: 30, stiffness: 240, mass: 0.3 });
  const iconY = useSpring(pointerY, { damping: 30, stiffness: 240, mass: 0.3 });
  const shipRotate = useSpring(rotation, {
    damping: 20,
    stiffness: 130,
    mass: 0.55,
  });

  const lastPos = useRef({ x: 0, y: 0 });
  const lastAngle = useRef(45);

  useEffect(() => {
    setMounted(true);

    const canTrack =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canTrack);

    if (!canTrack) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const dx = event.clientX - lastPos.current.x;
      const dy = event.clientY - lastPos.current.y;
      const speed = Math.hypot(dx, dy);

      if (speed > 2.5) {
        const nextAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 45;
        const unwrapped = shortestAngle(lastAngle.current, nextAngle);
        lastAngle.current = unwrapped;
        rotation.set(unwrapped);
      }

      lastPos.current = { x: event.clientX, y: event.clientY };
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
  }, [pointerX, pointerY, rotation]);

  if (!enabled || !mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--cursor-core)_0%,var(--cursor-glow)_42%,transparent_74%)] blur-3xl"
        style={{ x: glowX, y: glowY }}
        animate={{ opacity: visible ? 0.9 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {isDark ? (
        <motion.div
          className="absolute top-0 left-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2"
          style={{ x: iconX, y: iconY, rotate: shipRotate }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <motion.img
            src="/cursor/falcon.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(250,204,21,0.55)]"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="absolute top-0 left-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
          style={{ x: iconX, y: iconY }}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? [0.9, 1.12, 0.9] : 0.7,
            rotate: visible ? [0, 16, 0] : 0,
          }}
          transition={{
            opacity: { duration: 0.18, ease: "easeOut" },
            scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <img
            src="/cursor/uzumaki-crest.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain drop-shadow-[0_0_16px_rgba(220,38,38,0.55)]"
          />
        </motion.div>
      )}
    </div>
  );
}
