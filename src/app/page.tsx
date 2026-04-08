"use client";

import { ExternalLink, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#121212]">
      {/* Background figure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <Image
          src="/myrkur.jpg"
          alt="Myrkur"
          width={1800}
          height={1200}
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Bio — upper left */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease }}
        className="pointer-events-none absolute left-6 top-6 z-10 sm:left-8 sm:top-8"
      >
        <p className="font-[var(--font-manrope)] text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#e7dc2f]/60 sm:text-[0.8rem]">
          Jón Lorange
        </p>
        <p className="mt-1 font-[var(--font-manrope)] text-[0.78rem] font-normal tracking-wide text-[#e7dc2f]/45 sm:text-[0.8rem]">
          barnabókahöfundur · myndlistarmaður · forritari
        </p>
      </motion.div>

      {/* Title — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="pointer-events-none absolute bottom-8 left-6 z-10 sm:bottom-10 sm:left-8"
      >
        <h1
          className="font-[var(--font-cormorant)] font-semibold leading-[0.88] tracking-tight text-[#e7dc2f]"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)" }}
        >
          Landasonur
          <br />
          forlag.
        </h1>
      </motion.div>

      {/* Links — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-end gap-3 sm:bottom-10 sm:right-8"
      >
        {[
          {
            href: "https://www.forlagid.is/vara/efri-haedin/",
            label: "Kaupa bók",
            icon: <ExternalLink className="h-3.5 w-3.5" />,
          },
          {
            href: "mailto:jglorange@gmail.com",
            label: "Hafa samband",
            icon: <Mail className="h-3.5 w-3.5" />,
          },
          {
            href: "https://www.instagram.com/landasonur/",
            label: "Instagram",
            icon: <Instagram className="h-3.5 w-3.5" />,
            rel: "noreferrer",
          },
        ].map(({ href, label, icon, rel }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel={rel}
            className="inline-flex items-center gap-2 font-[var(--font-manrope)] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[#e7dc2f]/55 transition-colors duration-200 hover:text-[#e7dc2f] sm:text-[0.8rem]"
          >
            {label}
            {icon}
          </Link>
        ))}
      </motion.div>
    </main>
  );
}
