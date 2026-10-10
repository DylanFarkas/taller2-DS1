import { useForm } from "react-hook-form";
import { createUser } from "../../api/users.api";
import { useNavigate } from "react-router-dom";

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    navigate("/users");
    window.alert("Usuario creado correctamente");
  });

  return (
    <form onSubmit={onSubmit} className="flex max-w-sm flex-col gap-3">
      <input
        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
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
        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">El email es requerido</span>
      )}
      <input
        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-red-500 text-sm">La contraseña es requerida</span>
      )}
      <input
        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
        type="number"
        placeholder="Teléfono"
        {...register("phone", { required: true })}
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">El teléfono es requerido</span>
      )}
      <input
        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
        type="text"
        placeholder="Identificación"
        {...register("identification", { required: true })}
      />
      {errors.identification && (
        <span className="text-red-500 text-sm">
          La identificación es requerida
        </span>
      )}
      <div className="flex gap-2">
        <button
          className="w-full cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
          type="submit"
        >
          Crear Usuario
        </button>
        <button
          className="w-full cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600"
          type="button"
          onClick={() => navigate("/users")}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
