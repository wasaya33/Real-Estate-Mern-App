import {BrowserRouter , Routes , Route} from "react-router-dom"
import  Home  from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Header from "./Components/Header/Header"

export default function App(){
  return <BrowserRouter>
             <Header/>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
             </Routes>
         </BrowserRouter>
}
