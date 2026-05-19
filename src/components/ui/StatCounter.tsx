"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

type Props = {
  value: string;
  label: string;
};

export function StatCounter({ value, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimateOnView>
      <div ref={ref} className="text-center">
        <p
          className={`text-3xl font-bold text-white md:text-4xl ${visible ? "opacity-100" : "opacity-70"}`}
        >
          {value}
        </p>
        <p className="mt-2 text-sm text-white/80 md:text-base">{label}</p>
      </div>
    </AnimateOnView>
  );
}
