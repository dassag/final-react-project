import React from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Albums from './Component/Albums';
import Error from './Component/Error';
import Home from './Component/Home';
import Todos from './Component/Todos';
import Users from './Component/Users';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/todos' element={<Todos />}></Route>
          <Route exact path='/users' element={<Users />}></Route>
          <Route exact path='/albums' element={<Albums />}></Route>
          <Route exact path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
