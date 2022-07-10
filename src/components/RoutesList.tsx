import { Routes, Route, Outlet } from 'react-router-dom';
import Admin from '../pages/Admin';
import Genres from '../pages/Genres';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import OneGenre from '../pages/OneGenre';
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

                <Route path='genres' element={<Outlet />} >
                    <Route index element={<Genres />} />
                    <Route path=':id' element={<OneGenre />} />
                </Route>

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
}

export default RoutesList;