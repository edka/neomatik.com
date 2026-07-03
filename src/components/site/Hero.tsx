import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      {/* dark vignette + violet wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 40%, transparent, oklch(0.42 0.07 275 / 0.75) 75%), linear-gradient(180deg, oklch(0.5 0.09 55 / 0.25) 0%, oklch(0.42 0.07 275 / 0.9) 90%)",
        }}
      />

      <div className="relative z-10 container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-violet" />
          Cinematic Electronica &nbsp;/&nbsp; New York &nbsp;/&nbsp; Since the early 1990s
        </div>

        <h1
          className="text-[clamp(3.5rem,12vw,10rem)] font-normal leading-[0.9] tracking-[0.08em] text-foreground"
          style={{ fontFamily: "var(--font-wordmark)" }}
        >
          NEOMATIK
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          The music project of New York producer Ed Kabatsky — weaving cinematic
          electronica with indie and art-rock tones, balancing vocal and instrumental
          tracks that merge emotion and design.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/music"
            className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-all hover:bg-violet-glow glow-violet"
          >
            Listen to the music
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Booking &amp; press
          </Link>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-px w-8 bg-muted-foreground/60" /> Scroll
        </span>
      </div>
    </section>
  );
}
