import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import IntroPage from "./pages/IntroPage";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import "./server";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/HostLayout";
import HostVanList from "./pages/Host/HostVanList";
import HostVanDetail from "./pages/Host/HostVanDetail";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IntroPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVanList />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}
