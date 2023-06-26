import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/homepage/Home';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './components/utils/PrivateRoute';

function App() {
  return (
    <div className="App bg-gray-200">
      <Router>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
