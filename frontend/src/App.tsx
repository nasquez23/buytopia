import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminHeader from "./components/admin/AdminHeader";
import AdminHome from "./pages/admin/AdminHome";
import PrivateRoute from "./components/PrivateRoute";
import { Box } from "@mui/material";
import AdminSidebar from "./components/admin/AdminSidebar";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationProvider } from "./context/NotificationContext";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/admin/*"
              element={
                <PrivateRoute>
                  <>
                    <AdminHeader />
                    <Box sx={{ display: "flex" }}>
                      <AdminSidebar />
                      <Routes>
                        <Route path="/" element={<AdminHome />} />
                        <Route path="/products" element={<AdminProducts />} />
                        <Route path="/orders" element={<AdminOrders />} />
                        <Route path="/users" element={<AdminUsers />} />
                      </Routes>
                    </Box>
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </QueryClientProvider>
  );
}

export default App;
