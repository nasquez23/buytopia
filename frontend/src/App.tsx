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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <>
                <AdminHeader />
                <Box sx={{display: "flex"}}>
                  <AdminSidebar />
                  <Routes>
                    <Route path="/" element={<AdminHome />} />
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
  );
}

export default App;
