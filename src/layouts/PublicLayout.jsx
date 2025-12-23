import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function PublicLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      
      <main
        className={`min-h-screen bg-white ${
          isHome ? "pt-0" : "pt-28"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
