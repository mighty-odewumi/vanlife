import { Outlet } from "react-router-dom";
// import MainHeader from "./MainHeader";
import Footer from "./Footer";

export default function Layout() {

  // <MainHeader />

  return (
    <>
      
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
