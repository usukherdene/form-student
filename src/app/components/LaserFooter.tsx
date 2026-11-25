"use client";

import { useRef } from "react";
import Image from "next/image";

export const LaserFooter = ({ year }: { year: number }) => {
  const footer = useRef<HTMLElement>(null);

  return (
    <footer
      ref={footer}
      className="relative mb-2.5 flex w-full flex-none flex-col-reverse items-center justify-between gap-1 rounded-2xl p-5 sm:flex-row sm:gap-4"
    >
      <small className="inline-flex items-center gap-2 whitespace-nowrap text-xs text-[#d9cbe8]">
        <Image src="/icon.svg" alt="" width={20} height={20} />© {year} Astra
      </small>

      <p className="text-center text-sm leading-snug text-[#eadcf9] sm:text-right lg:text-base xl:text-lg">
        Take the first step toward something only you can build.
      </p>
    </footer>
  );
};
