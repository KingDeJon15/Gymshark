import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";

const nav = ["Men", "Women", "Accessories", "Sale", "Collections"];

export const Header = () => (
  <header className="sticky top-0 z-50 bg-background border-b border-border">
    <div className="grid grid-cols-3 items-center px-4 lg:px-8 h-16">
      <div className="flex items-center gap-7 justify-self-start">
        <button className="lg:hidden" aria-label="Menu"><Menu className="h-6 w-6" /></button>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map(n => (
            <a key={n} href="#" className="text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors">
              {n}
            </a>
          ))}
        </nav>
      </div>
      <a href="/" className="font-display text-2xl tracking-tight justify-self-center">TREIGN//</a>
      <div className="flex items-center gap-5 justify-self-end">
        <Search className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
        <User className="h-5 w-5 cursor-pointer hover:text-accent transition-colors hidden sm:block" />
        <Heart className="h-5 w-5 cursor-pointer hover:text-accent transition-colors hidden sm:block" />
        <div className="relative cursor-pointer">
          <ShoppingBag className="h-5 w-5 hover:text-accent transition-colors" />
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
        </div>
      </div>
    </div>
  </header>
);
