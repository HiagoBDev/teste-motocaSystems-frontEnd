import { Outlet } from "react-router-dom";
import Header from '../../Global/layouts/Header/Index'

export default function AppLayout() {
  return (
    <div className=" w-full h-screen bg-[#2A233C]">
      <Header/>
      <div className=" h-full">
        <Outlet/>
      </div>
    </div>
  )
}
