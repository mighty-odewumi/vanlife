import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from "react-router-dom";

import "./server";

import AboutPage from "./pages/AboutPage";
import IntroPage from "./pages/IntroPage";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/HostLayout";
import HostVanList from "./pages/Host/HostVanList";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";
import { loader as vansLoader } from "./pages/Vans/Vans";
import Error from "./components/Error";

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IntroPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route 
        path="vans" 
        element={<Vans />}  
        loader={vansLoader} 
        errorElement={<Error />}  
      />
      <Route path="/vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVanList />} />

        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />}/>
          <Route path="photos" element={<HostVanPhotos />}/>
          <Route path="pricing" element={<HostVanPricing />}/>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  ));


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
