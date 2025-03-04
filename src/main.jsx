import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { ColorModeProvider } from "./components/ui/color-mode";
import { Provider } from "./components/ui/provider";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Navbar from "./components/shopping-cart/Navbar.jsx";
import Footer from "./components/shopping-cart/Footer.jsx";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
          <Navbar />
          <Home/>
          <Footer />
      </>
    ),
  },
  {
    path: "shop",
    element: (
      <>
          <Navbar />
          <Shop />
          <Footer />
      </>
    ),
  },
  {
    path: "cart",
    element: (
      <>
          <Navbar />
          <Cart />
          <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NoPage />
        <Footer />
      </>
    ),
  }, // NoPage for undefined routes
]);

// Render the app with the router provider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorModeProvider forcedTheme="light">
      <Provider>
      <CartProvider>
        <RouterProvider router={router} />
        </CartProvider>
      </Provider>
    </ColorModeProvider>
  </StrictMode>
);
