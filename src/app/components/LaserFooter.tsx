"use client";

import { useRef } from "react";
import Image from "next/image";
import LaserFlow from "./animated/LaserFlow";

export const LaserFooter = ({ year }: { year: number }) => {
  const footer = useRef<HTMLElement>(null);

  return (
    <footer
      ref={footer}
      className="relative mb-2.5 flex w-full flex-none flex-col-reverse items-center justify-between gap-1 rounded-2xl p-5 sm:flex-row sm:gap-4"
    >
      <div className="pointer-events-none fixed inset-0 -z-1">
        <LaserFlow
          dpr={1}
          fog={4}
          dots={2}
          flare={2}
          dust={10}
          speed={2}
          spread={4}
          spill={0.55}
          beamWidth={2}
          intensity={0.8}
          transmission={1}
          beamPosition={0.5}
          revealImage={null}
          surfaceRef={footer}
        />
      </div>
      <small className="inline-flex items-center gap-2 whitespace-nowrap text-xs text-[#d9cbe8]">
        <Image src="/icon.svg" alt="" width={20} height={20} />© {year} Astra
      </small>

      <p className="text-center text-sm leading-snug text-[#eadcf9] sm:text-right lg:text-base xl:text-lg">
        Take the first step toward something only you can build.
      </p>
    </footer>
  );
};
