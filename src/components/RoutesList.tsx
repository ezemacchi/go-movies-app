import { Routes, Route, Outlet } from 'react-router-dom';
import Admin from '../pages/Admin';
import Categories from '../pages/Categories';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import OneCategory from '../pages/OneCategory';
import OneMovie from '../pages/OneMovie';

const RoutesList = () => {
    return (
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
    );
}

export default RoutesList;