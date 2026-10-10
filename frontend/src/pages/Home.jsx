export default function Home() {
    return (
        <div className="p-20">
            <h1 className="text-5xl font-bold mb-10">Página de inicio</h1>

            <div className="flex flex-col">
                <a href="/users" className="text-sm text-blue-500">Usuarios</a>
                <a href="/products" className="text-sm text-blue-500">Productos</a>
            </div>
        </div>
    )
}