export default function Navbar() {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6">
      <h2 className="font-semibold">
        Dashboard
      </h2>

      <div className="flex gap-4">
        <button>🔔</button>
        <button>👤</button>
      </div>
    </header>
  );
}