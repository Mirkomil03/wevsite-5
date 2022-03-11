import React from 'react';
import './App.css';
import { Routes, Route, Link  } from 'react-router-dom';
import { Mailer } from "./component/Mailer/Mailer"
import { Pagoda } from "./router/pagoda"
import { Home } from "./router/Home"
import { Porfolio } from "./router/Porfolio";
function App() {
   
  return (
    <div className="App">
     
        <div className='menu'>
          <Link to='/'>Home</Link><br/>
          <Link to='/Pagoda'>Pagoda</Link><br/>
          <Link to='/Mailer'>Mailer</Link>
          <Link to='/'>Porfolio</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Pagoda' element={<Pagoda/>} />
          <Route path='/Mailer' element={<Mailer/>} />
          <Route path='/Porfolio' element={<Mailer/>} />
        </Routes>

    </div>

  );
}

export default App;






