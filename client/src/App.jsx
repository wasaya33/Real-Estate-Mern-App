import {BrowserRouter , Routes , Route} from "react-router-dom"
import  Home  from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Header from "./Components/Header/Header"
import PrivateRoute from "./Components/PrivateRoute";
import CreateListing from "./pages/CreateListing"
import UppdateListing from "./pages/UppdateListing"
import Listing from './pages/Listing';
import Search from './pages/Search';

export default function App(){
  return <BrowserRouter>
             <Header/>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path='/search' element={<Search />} />
                <Route path='/listing/:listingId' element={<Listing />} />
                <Route  element={<PrivateRoute/>}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/create-listing" element={<CreateListing/>}/>
                <Route path="/update-listing/:listingId" element={<UppdateListing/>}/>
                </Route>
             </Routes>
         </BrowserRouter>
}
