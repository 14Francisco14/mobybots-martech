import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "Cart Joy — Product Demo";
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = "A simple product details page with add-to-cart, running fully on GitHub Pages.";
  }, []);

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background to-muted">
      <section className="container mx-auto px-4 py-20 grid gap-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Premium Wireless Headphones</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience studio-quality sound and effortless comfort. Explore the product and add it to your cart — no backend required.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link to="/product" aria-label="View product details">View Product</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
