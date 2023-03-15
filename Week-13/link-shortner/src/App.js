import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import HomePage from "./Components/HomePage";

const app = {
  minHeight: '100vh',
  backgroundColor: 'wheat'
}

function App() {
  return (
    <BrowserRouter>
    <Routes style={app}>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
