import { useState } from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import ProtectedPages from "./services/ProtectedPages.jsx";
import Game from "./Components/Game.jsx";
import MemoryGame from "./Components/MemoryGame.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/MemGame/login" element={<Login />} />
          <Route path="/MemGame/register" element={<Register />} />
          {/* protected pages */}
          <Route path="/MemGame/" element={<ProtectedPages />}>
            <Route path="/MemGame/" element={<Home />} />
            <Route path="/MemGame/game" element={<MemoryGame />} />
          </Route>
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
