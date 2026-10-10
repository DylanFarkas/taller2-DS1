import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../api/users.api";
import { useEffect } from "react";

export default function EditUserForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    
    const fetchUser = async () => {
        const response = await getUser(id);
        reset(response.data);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const onSubmit = handleSubmit(async (data) => {
        await updateUser(id, data);
        navigate("/users");
        window.alert("Usuario actualizado correctamente");
    });

    return(
        <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-80">
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Nombre de usuario"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            El nombre de usuario es requerido
          </span>
        )}
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">El email es requerido</span>
        )}
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">La contraseña es requerida</span>
        )}
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="number"
          placeholder="Teléfono"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">El teléfono es requerido</span>
        )}
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Identificación"
          {...register("identification", { required: true })}
        />
        {errors.identification && (
          <span className="text-red-500 text-sm">
            La identificación es requerida
          </span>
        )}
        <button
          className="bg-black text-white p-2 rounded-full cursor-pointer"
          type="submit"
        >
          Actualizar Usuario
        </button>
      </form>
    )
}