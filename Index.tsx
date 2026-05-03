import { AnnouncementBar } from "@/components/storefront/AnnouncementBar";
import { Header } from "@/components/storefront/Header";
import { Hero } from "@/components/storefront/Hero";
import { Categories } from "@/components/storefront/Categories";
import { ProductGrid } from "@/components/storefront/ProductGrid";
import { CommunityBanner } from "@/components/storefront/CommunityBanner";
import { Footer } from "@/components/storefront/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <AnnouncementBar />
    <Header />
    <Hero />
    <ProductGrid />
    <Categories />
    <CommunityBanner />
    <Footer />
  </main>
);

export default Index;
