import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
} from "react-router-dom";

// import "./server";

import AboutPage from "./pages/AboutPage";
import IntroPage from "./pages/IntroPage";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader} from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import HostLayout from "./components/HostLayout";
import HostVanList, { loader as hostVanListLoader }  from "./pages/Host/HostVanList";
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import 
  Login, 
  { loader as loginLoader, action as loginAction  } from "./pages/Login";
import { requireAuth } from "./utils";


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
      <Route 
        path="/vans/:id" 
        element={<VanDetail />} 
        loader={vanDetailLoader}
        errorElement={<Error />} 
      />
      <Route 
        path="/login" 
        element={<Login />} 
        loader={loginLoader}
        action={loginAction}
        errorElement={<Error />}
      />

      <Route 
        path="host" 
        element={<HostLayout />}
        loader={async ({ request }) => await requireAuth(request)}
      >
        <Route 
          index 
          element={<Dashboard />} 
          loader={dashboardLoader}
        />
        <Route 
          path="income" 
          element={<Income />} 
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route 
          path="reviews" 
          element={<Reviews />} 
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route 
          path="vans" 
          element={<HostVanList />} 
          loader={hostVanListLoader}
          errorElement={<Error />}
        />

        <Route 
          path="vans/:id" 
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route 
            index 
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route 
            path="photos" 
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route 
            path="pricing" 
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
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
