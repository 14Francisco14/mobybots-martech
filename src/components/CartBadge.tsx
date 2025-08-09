import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { getCartCount, onCartUpdated } from "@/lib/cart";

const CartBadge = () => {
  const [count, setCount] = useState<number>(getCartCount());

  useEffect(() => {
    const update = () => setCount(getCartCount());
    const off = onCartUpdated(update);
    return () => off();
  }, []);

  return (
    <div className="relative">
      <div
        aria-label={`Cart with ${count} item${count !== 1 ? "s" : ""}`}
        className="inline-flex items-center justify-center rounded-md border bg-card text-card-foreground shadow-sm h-10 w-10 hover:bg-accent transition-colors"
        role="button"
        tabIndex={0}
      >
        <ShoppingCart className="h-5 w-5" />
      </div>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium h-5 min-w-[1.25rem] px-1 shadow">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartBadge;
