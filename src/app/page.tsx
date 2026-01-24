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
              src="/kapa.png"
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
              EFRI HÆÐIN
            </h1>
            <div className="grid gap-3 text-lg">
              <p>
                Litla stúlkan og kisa lenda í óvæntum ævintýrum þegar þau ætla
                upp á efri hæðina til mömmu að sækja mjólk handa kisu að lepja.
                Þegar þau fara upp stigann til að komast á efri hæðina breytist
                allt.
              </p>
              <p>
                Í staðinn fyrir að finna mömmu rekast þau á fiskhausamenn að
                drekka kaffi, óendanlegt graslendi, opið hafið, hliðstæðan
                raunveruleika – og allskonar stiga sem virðast teygja sig út
                fyrir öll lögmál heimsins.
              </p>
              <p>
                Sagan minnir á klassísk ævintýri á borð við Lísa í Undralandi og
                Palli var einn í heiminum, þar sem hið venjulega snýst á hvolf
                og ímyndunaraflið fær að leika lausum hala.
              </p>
              <p>
                Efri Hæðin er myndskreytt barnabók fyrir 3 ára og eldri,
                fullkomin fyrir forvitin börn og fullorðna sem kunna að meta
                bækur sem örva ímyndunaraflið.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                target="_blank"
                href="https://www.forlagid.is/vara/efri-haedin/"
              >
                <Button>
                  Kaupa bók
                  <ExternalLink />
                </Button>
              </Link>

              <Link target="_blank" href="mailto:jglorange@gmail.com">
                <Button>
                  Hafa samband
                  <ExternalLink />
                </Button>
              </Link>
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
