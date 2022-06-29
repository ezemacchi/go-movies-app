import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import OneMovie from './components/OneMovie'

const App = () => {
  return (
    <Router>
      <div className='container'>

        <div className='row'>
          <h1 className='mt-3'>
            Go Watch a Movie!
          </h1>
          <hr className='mb-3'/>
        </div>

        <div className='row'>
          <div className='col-md-2'>
            <nav>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='list-group-item'>
                  <Link to='/movies'>Movies</Link>
                </li>
                <li className='list-group-item'>
                  <Link to='/by-category'>Categories</Link>
                </li>
                <li className='list-group-item'>
                  <Link to='/admin'>Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='col-md-10'>
            <Routes>
              <Route path='/movies/:id' element={<OneMovie />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/by-category' element={<CategoryPage />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
}

const CategoryPage = () => {
  
  let params = useParams();
  console.log(params);
  
  return (
    <div>
      <ul>
        <li><Link to={`${params}/comedy`}>Comedy</Link></li>
        <li><Link to={`${params}/drama`}>Drama</Link></li>
      </ul>
    </div>
  );
}


export default App();