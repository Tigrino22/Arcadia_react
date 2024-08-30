import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from './pages/layout';

const HomePage = lazy(() => import("./pages/home"));
const HabitatsPage = lazy(() => import("./pages/habitats"));
const ServicesPage = lazy(() => import('./pages/services'));
const ContactPage = lazy(() => import("./pages/contact"));



// Systeme de routing
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "habitats", element: <HabitatsPage /> },
        { path: "services", element: <ServicesPage /> },
        { path: "contact", element: <ContactPage /> },
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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}


export default App;