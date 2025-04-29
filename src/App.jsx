import { Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Header from "./Navbar/header";
import Footer from "./Footer/footer";
import Consulting from './components/Consulting';
import Dashboard from './components/dashboard';
import Profile from './pages/profile';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Courses from './components/Courses';
import Info from './components/Info';

function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
