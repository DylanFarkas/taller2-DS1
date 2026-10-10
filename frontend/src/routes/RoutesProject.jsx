import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import CreateUser from "../pages/CreateUser";
import Products from "../pages/Products";
import CreateProduct from "../pages/CreateProduct";
import EditUser from "../pages/EditUser";
import EditProduct from "../pages/EditProduct";

export default function RoutesProject() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
