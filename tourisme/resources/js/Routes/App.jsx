import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Menu from "../components/menu"
import City from "../components/city/City"
import Homebeaches from "../components/beaches/Home"

const App= () =>{
    return (
         <>
         <BrowserRouter>
            <Menu/>
           <Routes>
           <Route path='/' exact element={<Home/>}/>
           <Route path='/city' element={<City/>}/>
           <Route path='/beaches' element={<Homebeaches/>}/>
           
           </Routes>
         </BrowserRouter>
         </>
    )
}
export default App