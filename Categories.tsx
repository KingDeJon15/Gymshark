import women from "@/assets/cat-women.jpg";
import men from "@/assets/cat-men.jpg";

const cats = [
  { title: "Women", tag: "Sculpt. Lift. Train.", img: women },
  { title: "Men", tag: "Power. Stamina. Edge.", img: men },
];

export const Categories = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-background">
    {cats.map((c) => (
      <a key={c.title} href="#" className="group relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={c.img}
          alt={c.title}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-primary-foreground">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-80">{c.tag}</p>
          <h3 className="font-display text-5xl lg:text-7xl mb-4">{c.title}</h3>
          <span className="inline-block border-b-2 border-primary-foreground pb-1 text-sm font-bold uppercase tracking-widest group-hover:border-accent group-hover:text-accent transition-colors">
            Shop Now →
          </span>
        </div>
      </a>
    ))}
  </section>
);
