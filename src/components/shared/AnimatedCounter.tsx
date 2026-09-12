"use client";

import {
  useEffect,
  useState,
} from "react";
import {
  animate,
  useInView,
} from "motion/react";

import { useRef } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  duration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  const target = Number.parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView || !Number.isFinite(target)) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],

      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span
      ref={ref}
      className="tabular-nums"
    >
      {count}
      {suffix}
    </span>
  );
}