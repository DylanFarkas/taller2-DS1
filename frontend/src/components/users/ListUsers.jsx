import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../api/users.api";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    await fetchUsers();
    window.alert("Usuario eliminado correctamente");
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      {loading ? (
        <p className="text-sm text-gray-500">Cargando usuarios...</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full min-w-180 text-sm">
            <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Teléfono</th>
                <th className="px-4 py-3 font-medium">Identificación</th>
                <th className="px-4 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-3">{user.username}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.phone}</td>
                  <td className="px-4 py-3">{user.identification}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <a
                        href={`/edit-user/${user.id}`}
                        className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white"
                      >
                        Editar
                      </a>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white"
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
      <div>
        <a
          href="/create-user"
          className="inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Crear Usuario
        </a>
      </div>
    </div>
  );
}
