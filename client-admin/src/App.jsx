import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import ProductList from "./views/ProductList";
import LoginPage from "./views/LoginPage";
import Home from "./views/HomePage";
import Dashboard from "./views/Dashboardpage";
import AddProductPage from "./views/AddProductPage";
import CategoryPage from "./views/CategoryPage";
import RegisterPage from "./views/RegisterPage";
import AddCategoryPage from "./views/AddCategoryPage";
import EditProductPage from "./views/EditProductPage";
import EditCategoryPage from "./views/EditCategory";
import IngredientsPage from "./views/IngredientsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          throw redirect("/login");
        }

        return null;
      },
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <ProductList />,
          children: [],
        },
        {
          path: "categories",
          element: <CategoryPage />,
        },
        {
          path: "add-product",
          element: <AddProductPage />,
        },
        {
          path: "add-category",
          element: <AddCategoryPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "edit-product/:id",
          element: <EditProductPage />,
        },
        {
          path: "ingredients/:id",
          element: <IngredientsPage />,
        },
        {
          path: "edit-category/:id",
          element: <EditCategoryPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
      loader: () => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
          throw redirect("/");
        }

        return null;
      },
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
