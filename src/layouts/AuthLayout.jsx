import { Outlet } from "react-router-dom";
import mainlogo from "../assets/img/mainlogo.png";

export default function AuthLayout() {
  return (
    <div className="min-h-screen">
      
      {/* Left Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-10">
        <Outlet />
      </div>

      {/* Right Image */}
      <div className="hidden lg:block lg:w-1/2 rounded-l-3xl bg-black">
        <img
          src={mainlogo}
          alt="Music"
          className="h-full w-full object-cover rounded-l-3xl"
        />
      </div>
    </div>
  );
}