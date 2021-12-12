import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./components/About";
import { Ducks } from "./components/ducks";
import { Navbar } from "./components/Navbar";
import { Users } from "./components/Users";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-2">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Users />} />
          <Route path="/ducks" element={<Ducks/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
