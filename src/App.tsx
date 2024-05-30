import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Suspense fallback="loading">
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
         </Routes>
         </Suspense>
      </header>
    </div>
    </Router>
  );
}

export default App;
