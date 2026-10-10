import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createProduct, getCategories } from "../../api/products.api";
import { useNavigate } from "react-router-dom";

export default function CreateProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  const onSubmit = handleSubmit(async (data) => {
    await createProduct(data);
    window.alert("Producto creado correctamente");
    navigate("/products");
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={onSubmit} className="flex max-w-sm flex-col gap-3">
          <input
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">El nombre es requerido</span>
          )}
          <input
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
            type="number"
            placeholder="Precio"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500">El precio es requerido</span>
          )}
          <select
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
            name=""
            id=""
            {...register("category", { required: true })}
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-red-500">La categoría es requerida</span>
          )}
          <input
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
            type="number"
            placeholder="Cantidad"
            {...register("stock", { required: true })}
          />
          {errors.stock && (
            <span className="text-red-500">La cantidad es requerida</span>
          )}
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Crear Producto
            </button>
            <button
              className="w-full cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600"
              type="button"
              onClick={() => navigate("/products")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
