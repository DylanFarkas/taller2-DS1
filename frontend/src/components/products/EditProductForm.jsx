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
          Actualizar Producto
        </button>
      </form>
    </div>
  );
}
