import CreateProductForm from "../components/products/CreateProductForm";

export default function CreateProduct() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">
        Crear producto
      </h1>
      <CreateProductForm />
    </div>
  );
}
