import { NavLink } from "react-router-dom";


export default function Sidebar() {
const menus = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];
  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8">
        Admin Kit
      </h1>

      <ul className="space-y-2">
  {menus.map((menu) => (
    <li key={menu.path}>
      <NavLink
        to={menu.path}
        className={({ isActive }) =>
          `block p-2 rounded ${
            isActive
              ? "bg-slate-600"
              : "hover:bg-slate-700"
          }`
        }
      >
        {menu.name}
      </NavLink>
    </li>
  ))}
</ul>
    </aside>
  );
}