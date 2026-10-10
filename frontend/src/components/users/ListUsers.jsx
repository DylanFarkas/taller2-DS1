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
    <div className="flex flex-col gap-4 mt-10">
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <table className="w-full">
        <thead className="border border-gray-300 text-center">
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Teléfono</td>
            <td>Rol</td>
            <td>Identificación</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user) => (
            <tr key={user.id} className="border border-gray-300">
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>{user.identification}</td>
              <td>
                <a
                  href={`/edit-user/${user.id}`}
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Editar
                </a>
              </td>
              <td>
                <button 
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white p-1 rounded-md">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      <div className="mt-2 mb-10">
        <a
          href="/create-user"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Crear Usuario
        </a>
      </div>
    </div>
  );
}
