import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from 'react'
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext"


function App() {

  const {currentUser} = useContext(AuthContext)

  const PrivateRoute = ({children}) => {
    return currentUser ? children : <Navigate to="/"/>;
  }

  console.log(currentUser)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/anasayfa" 
          element={<PrivateRoute><Home/></PrivateRoute>} />
      </Routes>
    </Router>

  );
}

export default App;
