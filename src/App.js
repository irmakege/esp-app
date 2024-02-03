import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {

  const currentUser = false;

  const PrivateRoute = ({children}) => {
    return currentUser ? children : <Navigate to="/"/>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Router>

  );
}

export default App;
