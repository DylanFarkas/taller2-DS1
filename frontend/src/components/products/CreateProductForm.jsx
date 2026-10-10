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
    <div className="p-20">
      <div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-55">
          <input
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">El nombre es requerido</span>
          )}
          <input
            type="number"
            placeholder="Precio"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500">El precio es requerido</span>
          )}
          <select name="" id="" {...register("category", { required: true })}>
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
            type="number"
            placeholder="Cantidad"
            {...register("stock", { required: true })}
          />
          {errors.stock && (
            <span className="text-red-500">La cantidad es requerida</span>
          )}
          <button type="submit" className="text-white p-2 bg-black rounded-lg">
            Crear Producto
          </button>
        </form>
      </div>
    </div>
  );
}
