import { Outlet } from "react-router-dom";
import Header from "../../Global/layouts/Header/Index";
import { Toaster } from "react-hot-toast";

export default function AppLayout() {
  return (
    <div className=" w-full h-full bg-[#2A233C]">
      <Header />
      <div className=" h-full">
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
}
