import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Participantes from "../pages/Participantes";
import Registro from "../pages/Registro";
import Gafete from "../pages/Gafete";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    element: <Layout />,
    children: [
      { path: "participantes", element: <Participantes /> },
      { path: "registro", element: <Registro /> },
      { path: "gafete/:id", element: <Gafete /> },
    ],
  },
]);
