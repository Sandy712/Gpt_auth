import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Setting from './components/Setting';
import Dataset from './components/Dataset';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setUser({ token });

    }
}, []);

  return (
    <Router>
      <div className="container-fluid ">
        <div className="row">
          <nav className="col-lg-2 bg-dark">
            <ul className="navbar-nav flex-column">
              {
                user ?
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/" style={{ color: "white" }}>Chat</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dataset" style={{ color: "white" }}>Datasets</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/setting" style={{ color: "white" }}>Setting</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/logout" style={{ color: "white" }}>Sign out</Link>
                    </li>
                  </> :
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login" style={{ color: "white" }}>Login</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/signup" style={{ color: "white" }}>Signup</Link>
                    </li>
                  </>
              }
            </ul>
          </nav>



          <div className="col-lg-10">
            <Routes>
              {
                user ?
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/dataset" element={<Dataset />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path='/logout' element={<Logout setUser={setUser} />} />
                  </>
                  : null
              }
              <Route path='/login' element={<Login setUser={setUser} />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router >
  );
}

export default App;
