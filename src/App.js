import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Customers from './pages/Customers';
// import Favorite from './redux/Favorite';
import Detail from './pages/Detail';
import Fav from './pages/Fav';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/customers" element ={<Customers/>}/>
      <Route path="/favorites" element ={<Fav/>}/>
      <Route path="/detail/:id" element ={<Detail/>}/>
    </Routes>
    
   </BrowserRouter>
  );
}

export default App;
