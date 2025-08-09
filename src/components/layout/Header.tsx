import { Link, NavLink } from "react-router-dom";
import CartBadge from "@/components/CartBadge";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-semibold text-lg">
          Cart Joy
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-sm font-medium hover:underline underline-offset-4 ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            Product
          </NavLink>
          <CartBadge />
        </div>
      </nav>
    </header>
  );
};

export default Header;
