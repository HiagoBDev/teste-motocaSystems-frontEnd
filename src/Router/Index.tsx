import { BrowserRouter, Route, Routes } from "react-router-dom";
import MotoList from '../pages/MotoList/Index'
import MotoEdit from '../pages/MotoEdit/Index'
import MotoRegister from '../pages/MotoRegister/Index'
import AppLayout from "./Layouts/AppLayout";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<MotoList/>}/>
          <Route path="/motoRegister" element={<MotoRegister/>}/>
          <Route path="/MotoEdit" element={<MotoEdit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
