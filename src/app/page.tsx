"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CoinLogo } from "@/components/coin";

const KAROLINA_URL = "https://www.karolinafund.com/project/view/6559";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/bg.jpg"
        alt="Bakgrunnsmynd úr bókinni"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Floating logo top-left */}
      {/* Floating 3D coin logo (top-left) */}
      <div className="absolute top-6 left-6 z-20">
        <CoinLogo size={120} />
      </div>

      {/* Glow accents */}
      <div className="absolute inset-x-0 top-1/4 mx-auto h-40 w-[32rem] -translate-y-1/2 rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="absolute inset-x-0 bottom-10 mx-auto h-32 w-[28rem] rounded-full bg-amber-300/20 blur-3xl" />

      {/* Centered modal */}
      <div className="relative z-10 grid place-items-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl rounded-3xl border border-white/50 bg-white/80 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60 dark:ring-white/10"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          {/* Subtle decorative edge */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]" />

          <div className="relative flex flex-col items-center gap-6 p-6 sm:p-8 md:p-10">
            <Image
              src="/bok-mocky.jpg"
              alt="Bókarkápa: EFRI HÆÐIN eftir Jón Lorange"
              height={580}
              width={580}
              className="h-auto w-full max-w-md rounded-2xl shadow-lg"
              priority
            />

            <h1
              id="modal-title"
              className="text-center text-3xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm md:text-4xl dark:text-white"
            >
              EFRI HÆÐIN – fjármögnun
            </h1>

            <div className="flex w-full flex-col items-center gap-4">
              <Link
                href={KAROLINA_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-md"
              >
                <Button className="h-12 w-full gap-2 rounded-2xl text-lg shadow-lg transition-transform active:scale-[0.98]">
                  Sjá fjármögnun á Karolina Fund
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </Link>

              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-sm">Hafa samband:</span>
                <Link href="mailto:jglorange@gmail.com">
                  <Button variant="link" className="gap-2 text-base">
                    <Mail className="h-4 w-4" /> jglorange@gmail.com
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Ambient hover ring */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="pointer-events-none absolute -inset-[2px] rounded-[25px] ring-1 ring-emerald-400/40"
          />
        </motion.div>
      </div>
    </div>
  );
}
