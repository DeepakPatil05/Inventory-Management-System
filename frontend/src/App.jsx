import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import LoginPage from "./LoginPage.jsx";
import "@fontsource/inknut-antiqua";

function App() {
  return (
    <Router>
      <div className="overflow-y-hidden">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />
          {/* Route for the login page */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
