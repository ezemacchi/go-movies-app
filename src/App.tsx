import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Admin from './pages/Admin';
import OneCategory from './pages/OneCategory';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Movies from './pages/Movies';
import OneMovie from './pages/OneMovie'
import Error from './pages/Error';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <Router>
      <div className='container'>

        <div className='row'>
          <h1 className='mt-3'>
            Go Watch a Movie!
          </h1>
          <hr className='mb-3' />
        </div>

        <div className='row'>
          <Navbar />
          <div className='col-md-10'>
            <Routes>
              <Route path='/' element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path='admin' element={<Admin />} />

                <Route path='movies' element={<Outlet />} >
                  <Route index element={<Movies />} />
                  <Route path=':id' element={<OneMovie />} />
                </Route>

                <Route path='by-category' element={<Outlet />} >
                  <Route index element={<Categories />} />
                  <Route path=':category' element={<OneCategory />} />
                </Route>

                <Route path='*' element={<Error />} />
              </Route>
            </Routes>
          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;