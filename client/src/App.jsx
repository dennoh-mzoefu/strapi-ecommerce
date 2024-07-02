import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//  Define components
const ErrorPage = () => <h1>Something went wrong. Please try again later.</h1>;

const Layout = () => {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />

      {/* outlet */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // Global error boundary
    children: [
      {
        path: "/",
        element: <span>Home</span>
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
