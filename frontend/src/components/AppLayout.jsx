import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio", end: true },
  {
    to: "/users",
    label: "Usuarios",
    active: (path) =>
      path.startsWith("/users") ||
      path.startsWith("/create-user") ||
      path.startsWith("/edit-user"),
  },
  {
    to: "/products",
    label: "Productos",
    active: (path) =>
      path.startsWith("/products") ||
      path.startsWith("/create-product") ||
      path.startsWith("/edit-product"),
  },
];

export default function AppLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-white text-black">
      <aside className="fixed inset-y-0 left-0 flex w-56 flex-col border-r border-gray-200 bg-white">
        <div className="px-5 py-6">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Taller
          </p>
          <p className="mt-1 text-lg font-semibold">Panel</p>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {links.map((link) => {
            const isActive = link.end
              ? pathname === "/"
              : link.active(pathname);

            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="ml-56 min-h-screen px-8 py-8">{children}</main>
    </div>
  );
}
