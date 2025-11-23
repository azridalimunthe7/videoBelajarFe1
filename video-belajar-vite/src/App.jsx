import { BrowserRouter, Routes, Route } from "react-router-dom"; // import ketiga ini buat library routing pages react
import Home from "./pages/Home.jsx"; // import dulu
import Login from "./pages/Login.jsx"; // import dulu
import Register from "./pages/Register.jsx"; // import dulu

function App() {
  return (
    // <BrowserRouter> wajib ini induk semuanya
    <BrowserRouter>
      {/* <Routes> ini route library react */}
      <Routes>
        {/* Path "/" -> Home */}
        <Route path="/" element={<Home />} />

        {/* Path "/login" -> Login */}
        <Route path="/login" element={<Login />} />

        {/* Path "/register" -> Register */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
