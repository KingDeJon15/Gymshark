import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const products = [
  { name: "Vital Seamless Bra", price: 38, colors: 5, img: p1, tag: "New" },
  { name: "Adapt High-Rise Legging", price: 60, colors: 8, img: p2, tag: "Bestseller" },
  { name: "Critical Training Tank", price: 32, colors: 4, img: p3, tag: null },
  { name: "Arrival 7\" Short", price: 40, colors: 6, img: p4, tag: "New" },
];

export const ProductGrid = () => (
  <section id="shop" className="px-4 lg:px-8 py-20 max-w-[1600px] mx-auto">
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3">Just Dropped</p>
        <h2 className="font-display text-4xl lg:text-6xl">New Arrivals</h2>
      </div>
      <a href="#" className="hidden sm:inline-block text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
        View All
      </a>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10">
      {products.map((p) => (
        <a key={p.name} href="#" className="group block">
          <div className="relative aspect-[4/5] bg-[hsl(30_12%_90%)] overflow-hidden mb-4">
            {p.tag && (
              <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                {p.tag}
              </span>
            )}
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              width={800}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <button className="absolute bottom-0 inset-x-0 bg-primary text-primary-foreground py-3 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform">
              Quick Add +
            </button>
          </div>
          <h3 className="font-bold text-sm mb-1">{p.name}</h3>
          <p className="text-sm text-muted-foreground mb-1">${p.price}.00</p>
          <p className="text-xs text-muted-foreground">{p.colors} colors</p>
        </a>
      ))}
    </div>
  </section>
);
