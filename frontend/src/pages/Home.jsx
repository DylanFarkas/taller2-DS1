import { Link } from "react-router-dom";

const sections = [
  {
    to: "/users",
    title: "Usuarios",
    description: "Consulta, crea y edita los usuarios.",
  },
  {
    to: "/products",
    title: "Productos",
    description: "Consulta, crea y edita los productos.",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Inicio</h1>

      <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.to}
            to={section.to}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gray-300"
          >
            <h2 className="font-medium">{section.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
