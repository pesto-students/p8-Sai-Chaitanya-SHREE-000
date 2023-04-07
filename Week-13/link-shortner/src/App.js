import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, LandingPage, Blogs, Contact, Login, Signup } from './components';

const app = {
  minHeight: '100vh',
  backgroundColor: 'wheat'
}

function App() {
  return (
    <BrowserRouter>
    <Routes style={app}>
      <Route path="/" element={<LandingPage />} />
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
