import { useSelector } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Employees from "./pages/Employees";
import Contact from "./pages/Contact";
import Editors from "./pages/Editors";
import Calender from "./pages/Calender";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';

function App() {
  const user = useSelector((state) => state.user.value);
  console.log(user.isLogin);
  
  return (
    <>
      <BrowserRouter>
        <div className='flex'>
          {user.isLogin && <Sidebar />}
          <div className='w-full'>
            {user.isLogin && <Navbar />}
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/" element={<Login/>}/> */}
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
