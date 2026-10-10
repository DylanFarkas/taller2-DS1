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
    <div>
      <div>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Categoria</td>
                <td>Cantidad</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category_name}</td>
                  <td>{product.stock}</td>
                  <td>
                    <a href={`/edit-product/${product.id}`} className="text-white p-2 bg-blue-500 px-5 rounded-md mx-2">
                      Editar
                    </a>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded-md mx-2"
                      onClick={() => handleDelete(product.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-5 mb-5">
        <a
          href="create-product/"
          className="text-white p-2 bg-black rounded-lg"
        >
          Crear Producto
        </a>
      </div>
    </div>
  );
}
