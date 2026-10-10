import ListUsers from '../components/users/ListUsers.jsx'

export default function Users() {
    return (
        <div className="p-20"   >
            <h1 className="text-5xl font-bold">Usuarios</h1>

            <ListUsers />

            <a href="/">Inicio</a>
        </div>
    )
}