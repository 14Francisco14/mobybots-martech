import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import productImage from "@/assets/product-headphones.jpg";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";

const currency = (n: number) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);

const Product = () => {
  const product = useMemo(() => ({
    id: "headphones-001",
    name: "Premium Wireless Headphones",
    price: 199.0,
    image: productImage,
    description:
      "Experience exceptional sound with active noise cancellation, 30-hour battery life, and ultra-soft ear cushions.",
  }), []);

  const [qty, setQty] = useState(1);

  useEffect(() => {
    const title = `${product.name} | Cart Joy`;
    document.title = title;

    const ensureMeta = (attr: string, selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta("description", 'meta[name="description"]', `${product.name} – ${product.description}`);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, [product]);

  const onAdd = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, qty);
    toast.success(`${qty} × ${product.name} added to cart`);
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section className="relative">
          <img
            src={product.image}
            alt={`${product.name} product photo`}
            loading="lazy"
            className="w-full h-auto rounded-lg border shadow-sm will-change-transform transition-transform duration-300 ease-out hover:scale-[1.01]"
          />
        </section>
        <section>
          <Card className="border">
            <CardHeader>
              <h1 className="text-3xl md:text-4xl font-semibold leading-none tracking-tight" data-product-id="product-id-1">{product.name}</h1>
              <p className="text-muted-foreground">Studio-grade sound, anywhere.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold">{currency(product.price)}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-md border">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </Button>
                  <div className="w-12 text-center font-medium select-none" aria-live="polite">
                    {qty}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    +
                  </Button>
                </div>

                <Button className="px-6" onClick={onAdd} aria-label="Add to cart">
                  Add to cart
                </Button>
              </div>

              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                <li>Free shipping and 30-day returns</li>
                <li>2-year limited warranty</li>
                <li>Compatible with iOS, Android, Windows, and macOS</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: [window.location.origin + product.image],
            description: product.description,
            brand: { "@type": "Brand", name: "Cart Joy" },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: product.price.toFixed(2),
              availability: "https://schema.org/InStock",
              url: typeof window !== "undefined" ? window.location.href : "",
            },
          }),
        }}
      />
    </main>
  );
};

export default Product;
