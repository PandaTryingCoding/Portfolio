"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type BlasterBolt = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  angle: number;
};

function shortestAngle(from: number, to: number) {
  const delta = ((to - from + 540) % 360) - 180;
  return from + delta;
}

const BOLT_DISTANCE = 1080;
const BOLT_DURATION = 1;
const FALCON_NOSE_OFFSET = 45;

export function CursorTracker() {
  const { resolvedTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [bolts, setBolts] = useState<BlasterBolt[]>([]);
  const [firing, setFiring] = useState(false);

  const pointerX = useMotionValue(-240);
  const pointerY = useMotionValue(-240);
  const rotation = useMotionValue(45);

  const glowX = useSpring(pointerX, {
    damping: 26,
    stiffness: 160,
    mass: 0.45,
  });
  const glowY = useSpring(pointerY, {
    damping: 26,
    stiffness: 160,
    mass: 0.45,
  });
  const iconX = useSpring(pointerX, { damping: 30, stiffness: 240, mass: 0.3 });
  const iconY = useSpring(pointerY, { damping: 30, stiffness: 240, mass: 0.3 });
  const shipRotate = useSpring(rotation, {
    damping: 20,
    stiffness: 130,
    mass: 0.55,
  });

  const lastPos = useRef({ x: 0, y: 0 });
  const lastAngle = useRef(45);
  const isDarkRef = useRef(false);
  const visibleRef = useRef(false);
  const boltId = useRef(0);

  isDarkRef.current = resolvedTheme === "dark";
  visibleRef.current = visible;

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

    const handleClick = () => {
      if (!isDarkRef.current || !visibleRef.current) {
        return;
      }

      const travelDeg = shipRotate.get() + FALCON_NOSE_OFFSET;
      const travelRad = (travelDeg * Math.PI) / 180;
      const perpRad = travelRad + Math.PI / 2;
      const dx = Math.cos(travelRad) * BOLT_DISTANCE;
      const dy = Math.sin(travelRad) * BOLT_DISTANCE;
      const originX = iconX.get();
      const originY = iconY.get();
      const muzzle = 26;
      const spread = 7;
      const startX = originX + Math.cos(travelRad) * muzzle;
      const startY = originY + Math.sin(travelRad) * muzzle;

      const nextBolts: BlasterBolt[] = [-1, 1].map((side) => {
        boltId.current += 1;
        return {
          id: boltId.current,
          x: startX + Math.cos(perpRad) * spread * side,
          y: startY + Math.sin(perpRad) * spread * side,
          dx,
          dy,
          angle: travelDeg,
        };
      });

      setBolts((current) => [...current.slice(-10), ...nextBolts]);
      setFiring(true);
      window.setTimeout(() => setFiring(false), 140);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [pointerX, pointerY, rotation, shipRotate, iconX, iconY]);

  if (!enabled || !mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
      <motion.div
        className='absolute top-0 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--cursor-core)_0%,var(--cursor-glow)_42%,transparent_74%)] blur-3xl'
        style={{ x: glowX, y: glowY }}
        animate={{ opacity: visible ? 0.9 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {isDark ? (
        <motion.div
          className='absolute top-0 left-0 h-18 w-18 -translate-x-1/2 -translate-y-1/2'
          style={{ x: iconX, y: iconY, rotate: shipRotate }}
          animate={{
            opacity: visible ? 1 : 0,
            scale: firing ? 1.08 : 1,
          }}
          transition={{ duration: 0.12, ease: "easeOut" }}
        >
          <motion.img
            src='/cursor/falcon.png'
            alt=''
            aria-hidden='true'
            className='h-full w-full object-contain drop-shadow-[0_0_18px_rgba(250,204,21,0.55)]'
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ) : (
        <motion.div
          className='absolute top-0 left-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2'
          style={{ x: iconX, y: iconY }}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? [0.9, 1.12, 0.9] : 0.7,
            rotate: visible ? [0, 16, 0] : 0.7,
          }}
          transition={{
            opacity: { duration: 0.18, ease: "easeOut" },
            scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <img
            src='/cursor/uzumaki-crest.png'
            alt=''
            aria-hidden='true'
            className='h-full w-full object-contain drop-shadow-[0_0_16px_rgba(220,38,38,0.55)]'
          />
        </motion.div>
      )}

      {bolts.map((bolt) => (
        <motion.div
          key={bolt.id}
          className='absolute top-0 left-0'
          initial={{ x: bolt.x, y: bolt.y, opacity: 1 }}
          animate={{
            x: bolt.x + bolt.dx,
            y: bolt.y + bolt.dy,
            opacity: [1, 1, 0],
          }}
          transition={{ duration: BOLT_DURATION, ease: "linear" }}
          onAnimationComplete={() => {
            setBolts((current) =>
              current.filter((item) => item.id !== bolt.id),
            );
          }}
        >
          <span
            className='block h-0.75 w-14 origin-left rounded-full bg-linear-to-r from-red-600 via-red-400 to-yellow-100 shadow-[0_0_12px_rgba(248,113,113,0.95)]'
            style={{ transform: `rotate(${bolt.angle}deg)` }}
          />
        </motion.div>
      ))}
    </div>
  );
}
