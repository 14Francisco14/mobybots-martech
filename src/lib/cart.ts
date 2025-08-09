export type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  qty: number;
};

const CART_KEY = "cart";
const EVENT_NAME = "cart:updated";

function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

export function addToCart(item: Omit<CartItem, "qty">, qty: number = 1) {
  const cart = getCart();
  const idx = cart.findIndex((i) => i.id === item.id);
  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({ ...item, qty });
  }
  saveCart(cart);
}

export function getCartCount(): number {
  return getCart().reduce((sum, i) => sum + (i.qty || 0), 0);
}

export function clearCart() {
  saveCart([]);
}

export function onCartUpdated(handler: () => void) {
  const fn = () => handler();
  window.addEventListener(EVENT_NAME, fn);
  window.addEventListener("storage", (e) => {
    if (e.key === CART_KEY) handler();
  });
  return () => window.removeEventListener(EVENT_NAME, fn);
}
