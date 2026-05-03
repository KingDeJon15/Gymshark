import { useEffect, useState } from "react";
import hero from "@/assets/hero-athlete.jpg";

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[hsl(30_18%_86%)]">
      <img
        src={hero}
        alt="Athlete lifting a barbell overhead in Treign training apparel"
        width={1536}
        height={1024}
        className="absolute inset-0 h-[115%] w-full object-cover object-center will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.35}px, 0) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_18%_86%)] via-transparent to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end px-4 lg:px-12 pb-16 lg:pb-24 text-primary max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-70">New / Train Era</p>
        <h1 className="font-display text-6xl sm:text-8xl lg:text-[10rem] leading-[0.85] mb-6 max-w-5xl">
          Built<br />For More.
        </h1>
        <p className="max-w-md text-base lg:text-lg mb-8 opacity-80">
          Engineered fabrics. Uncompromising fit. Gear that performs harder than you do.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#shop" className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors">
            Shop Men
          </a>
          <a href="#shop" className="border-2 border-primary text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors">
            Shop Women
          </a>
        </div>
      </div>
    </section>
  );
};
