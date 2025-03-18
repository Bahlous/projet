import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Erreur from './pages/Erreur';
import BareNav from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BareNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<Erreur/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
