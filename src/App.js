import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Customers from './pages/Customers';
import Favorite from './redux/Favorite';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/customers" element ={<Customers/>}/>
      <Route path="/favorites" element ={<Favorite/>}/>
    </Routes>
    
   </BrowserRouter>
  );
}

export default App;
