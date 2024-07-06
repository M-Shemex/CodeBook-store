import { HomePage, ProductList } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components";
import { Footer } from "../components";
import { ProductDetail } from "../pages/ProductDetail";
import { ScrollToTop } from "../components/other/ScrollToTop";
import { Login } from "../pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./ProtectedRoute";
import { Cart } from "../pages";
import { Register } from "../pages";
import { Dashboard } from "../pages";
import { Orders } from "../pages";

export const AllRoutes = () => {
  return (
    <Router>
      <ScrollToTop />

      <Header />
      <ToastContainer />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ProductList />} path="/products" />
        <Route element={<ProductDetail />} path="/products/:productId" />
        <Route element={<Login />} path="login" />
        <Route element={<Register />} path="Register" />
        <Route
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
          path="Cart"
        />
        <Route
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
          path="/order-summary"
        />
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          path="/dashboard"
        />
      </Routes>
      <Footer />
    </Router>
  );
};
