import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Menu from "../components/menu"
import City from "../components/city/City"
import Homebeaches from "../components/beaches/Home"
import Login from "../components/Auth/Login"
import Themeprovider from "../components/Context/context"

const App= () =>{
    return (
         <>
         <BrowserRouter>
         <Themeprovider>
            <Menu/>
            <Login/>
           <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/city' exact element={<City/>}/>
           <Route path='/beaches' element={<Homebeaches/>}/>
           
           </Routes>
           </Themeprovider>
         </BrowserRouter>
         </>
    )
}
export default App