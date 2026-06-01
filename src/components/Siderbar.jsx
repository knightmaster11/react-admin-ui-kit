export default function Sidebar() {
  const menus = [
    "Dashboard",
    "Users",
    "Products",
    "Orders",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8">
        Admin Kit
      </h1>

      <ul className="space-y-2">
        {menus.map((menu) => (
          <li
            key={menu}
            className="p-2 rounded hover:bg-slate-700 cursor-pointer"
          >
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}