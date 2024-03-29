import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Menu from "../components/menu"
import City from "../components/city/City"
import Homebeaches from "../components/beaches/Home"
import Login from "../components/Auth/Login"
import Themeprovider from "../components/Context/context"
import Registre from "../components/Auth/Registre"
import Comment from "../components/comment/Comment"
import Addcomment from "../components/comment/Addcomment"

const App= () =>{
    return (
         <>
         <BrowserRouter>
         <Themeprovider>
            <Menu/>
            <Addcomment/>
            <Login/>
            <Registre/>
           <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/city' exact element={<City/>}/>
           <Route path='/beaches' element={<Homebeaches/>}/>
           <Route path='/comment' element={<Comment/>}/>
           </Routes>
           </Themeprovider>
         </BrowserRouter>
         </>
    )
}
export default App