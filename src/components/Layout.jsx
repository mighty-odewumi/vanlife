import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export default function Layout() {

  return (
    <>
      
      <MainHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
