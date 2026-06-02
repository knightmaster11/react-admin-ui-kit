import { useLocation } from "react-router-dom";

export default function Navbar() {
const location = useLocation();
const pageTitle = {
  "/": "Dashboard",
  "/users": "Users",
  "/products": "Products",
  "/settings": "Settings",
};
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6">
      <h2>{pageTitle[location.pathname]}</h2>

      <div className="flex gap-4">
        <button>🔔</button>
        <button>👤</button>
      </div>
    </header>
  );
}