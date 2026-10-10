import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../api/products.api";

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    await deleteProduct(id);
    fetchProducts();
    window.alert("Producto eliminado correctamente");
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-6">
      <div>
        {loading ? (
          <p className="text-sm text-gray-500">Cargando productos...</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full min-w-160 text-sm">
              <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Nombre</th>
                  <th className="px-4 py-3 font-medium">Precio</th>
                  <th className="px-4 py-3 font-medium">Categoria</th>
                  <th className="px-4 py-3 font-medium">Cantidad</th>
                  <th className="px-4 py-3 font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-4 py-3">{product.id}</td>
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">{product.price}</td>
                    <td className="px-4 py-3">{product.category_name}</td>
                    <td className="px-4 py-3">{product.stock}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <a
                          href={`/edit-product/${product.id}`}
                          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white"
                        >
                          Editar
                        </a>
                        <button
                          className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white"
                          onClick={() => handleDelete(product.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="mt-4">
        <a
          href="create-product/"
          className="inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Crear Producto
        </a>
      </div>
    </div>
  );
}
