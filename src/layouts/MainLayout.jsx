import {Outlet} from "react-router-dom"
import { FirstNavbar } from "../Component/header/Header"

const MainLayout = ()=>{
    return(
        <>
        <FirstNavbar/>
        <div>
          <Outlet/>    
        </div>
      
        </>
    )
}

export default MainLayout