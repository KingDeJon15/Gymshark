const cols = [
  { title: "Shop", links: ["Women", "Men", "Accessories", "Sale", "Gift Cards"] },
  { title: "Help", links: ["Contact Us", "Shipping", "Returns", "Size Guide", "FAQ"] },
  { title: "About", links: ["Our Story", "Sustainability", "Careers", "Press", "Athletes"] },
];

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="border-b border-primary-foreground/10 px-4 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h3 className="font-display text-3xl lg:text-5xl mb-4">Sign up. Save 10%.</h3>
        <p className="opacity-70 mb-6">Be first on drops, exclusive access and training content.</p>
        <form className="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
          />
          <button className="bg-accent text-accent-foreground px-6 text-sm font-bold uppercase tracking-widest hover:opacity-90">
            Join
          </button>
        </form>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 lg:px-8 py-16">
      <div className="col-span-2 md:col-span-1">
        <p className="font-display text-2xl mb-3">TREIGN//</p>
        <p className="text-sm opacity-60">Conditioning gear for the relentless.</p>
      </div>
      {cols.map(c => (
        <div key={c.title}>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">{c.title}</h4>
          <ul className="space-y-2.5">
            {c.links.map(l => (
              <li key={l}><a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="border-t border-primary-foreground/10 px-4 lg:px-8 py-6 flex flex-wrap justify-between gap-3 text-xs opacity-60">
      <p>© 2026 Forge Athletic. All rights reserved.</p>
      <p>Privacy · Terms · Cookies</p>
    </div>
  </footer>
);
