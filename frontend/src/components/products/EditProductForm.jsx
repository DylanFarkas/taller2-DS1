import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getProduct, updateProduct } from "../../api/products.api";

export default function EditProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const fetchProduct = async () => {
    const response = await getProduct(id);
    reset(response.data);
  }

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    await updateProduct(id, data);
    navigate("/products");
    window.alert("Producto actualizado correctamente");
  });

  return (
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
        <button type="submit" className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">
          Actualizar Producto
        </button>
      </form>
    </div>
  );
}
