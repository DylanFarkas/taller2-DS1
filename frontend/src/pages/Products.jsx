import ListProducts from "../components/products/ListProducts";

export default function Products() {
    return (
        <div className="p-20">
            <h1 className="text-5xl font-bold mb-10">Products</h1>
            
            <ListProducts />

            <a href="/" className="text-blue-500 underline"> Volver a la página principal</a>
        </div>
    )
}