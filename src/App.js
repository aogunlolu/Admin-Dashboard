import { useSelector } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Employees from "./pages/Employees";
import Contact from "./pages/Contact";
import Editors from "./pages/Editors";
import Calender from "./pages/Calender";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import { selectUser } from './features/UserSlice';

function App() {
  const user = useSelector(selectUser);

  // console.log(user.isLogin);
 
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-1'>       
           {user.isLogin && user.showSidebar && <Sidebar/>} 
          <div className='w-full flex-1'>
            {user.isLogin && <Navbar />}           
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ticket" element={<Tickets />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/editor" element={<Editors />} />
              <Route path="/employee" element={<Employees />} />
              <Route path="/Calender" element={<Calender />} />
            </Routes>
            </div>         
        </div>     
      </BrowserRouter>
    </>
  );
}

export default App;
