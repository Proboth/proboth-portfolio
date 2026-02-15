import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroScrollGate({ children }) {
  const ref = useRef(null);

  // 0 -> 1 after 2 wheel steps
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 180, damping: 24, mass: 0.7 });

  const [locked, setLocked] = useState(true);
  const stepsRef = useRef(0);

  // ✅ Max zoom = 2
  const cubeScale = useTransform(smooth, [0, 1], [1, 2]);
  const cubeOpacity = useTransform(smooth, [0, 0.1], [0.95, 1]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const addLock = () => {
      document.documentElement.classList.add("lock-scroll");
      document.body.classList.add("lock-scroll");
    };

    const removeLock = () => {
      document.documentElement.classList.remove("lock-scroll");
      document.body.classList.remove("lock-scroll");
    };

    const unlock = () => {
      setLocked(false);
      removeLock();
    };

    if (locked) addLock();
    else removeLock();

    // ✅ Only 2 wheel ticks
    const onWheel = (e) => {
      if (!locked) return;

      // Only handle scroll down
      if (e.deltaY <= 0) return;

      e.preventDefault();

      stepsRef.current += 1;

      // step 1 -> 0.5 progress, step 2 -> 1 progress
      const next = Math.min(stepsRef.current / 2, 1);
      progress.set(next);

      if (stepsRef.current >= 2) unlock();
    };

    // ✅ Touch: two swipe steps (simple)
    let touchStartY = 0;
    const onTouchStart = (e) => {
      if (!locked) return;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!locked) return;

      const y = e.touches[0].clientY;
      const delta = touchStartY - y;

      // only count meaningful swipe up
      if (delta > 30) {
        e.preventDefault();
        touchStartY = y;

        stepsRef.current += 1;
        const next = Math.min(stepsRef.current / 2, 1);
        progress.set(next);

        if (stepsRef.current >= 2) unlock();
      }
    };

    // ✅ Never trap user: if hero leaves view, unlock
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && locked) unlock();
      },
      { threshold: 0.55 }
    );

    io.observe(el);

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      io.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      removeLock();
    };
  }, [locked, progress]);

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div style={{ scale: cubeScale, opacity: cubeOpacity }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
