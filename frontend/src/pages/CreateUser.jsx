import CreateUserForm from "../components/users/CreateUserForm";

export default function CreateUser() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">
        Crear usuario
      </h1>
      <CreateUserForm />
    </div>
  );
}
