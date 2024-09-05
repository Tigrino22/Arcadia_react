import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from './pages/layout';
import SpinnerLoader from "./components/spinnerLoader";
import Login from "./pages/Auth/login";

const HomePage = lazy(() => import("./pages/home"));
const Habitats = lazy(() => import("./pages/habitats"));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import("./pages/contact"));



// Systeme de routing
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "habitats", element: <Habitats /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
        { path: "login", element: <Login />},
      ]
    },
    {
      path: "*",
      element: <div>404</div>//<NotFoundPage />, // Crée ce composant pour afficher un message 404 ou rediriger
    }

  ]
)


// Fonction principale appelée pour etre rendu,
// Ici c'est le router de l'application
function App() {

  return (
    <Suspense fallback={<SpinnerLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}


export default App;