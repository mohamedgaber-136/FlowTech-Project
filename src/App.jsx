// Importing necessary modules and components from 'react-router-dom' for routing and layout
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home"; // Importing Home page component
import { SingleEmployee } from "./pages/singleEmployee"; // Importing SingleEmployee page component
import { LayoutDesign } from "./compontents/Layout"; // Importing LayoutDesign component which will be used as the main layout

function App() {
  // Setting up the router using createBrowserRouter
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutDesign />}> {/* The root route for the app, wrapping with LayoutDesign component */}
        <Route index element={<Home />} /> {/* Default route (index) that renders Home component */}
        <Route path="employee/:id" element={<SingleEmployee />} /> {/* Route to view individual employee, with dynamic ':id' parameter */}
      </Route>
    )
  );

  // Rendering the router provider with the configured router to handle navigation
  return <RouterProvider router={router} />;
}

export default App; // Exporting the App component as default for usage elsewhere in the app
