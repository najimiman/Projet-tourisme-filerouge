import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Menu from "../components/menu"

const App= () =>{
    return (
         <>
         <BrowserRouter>
            <Menu/>
           <Routes>
           <Route path='/' element={<Home/>}/>
           {/* <Route path='/addnewproduct' element={<AddnewProduct/>}/>
           <Route path='/updatenewproduct/:id' element={<UpdatenewProduct />}/> */}
           </Routes>
         </BrowserRouter>
         </>
    )
}
export default App