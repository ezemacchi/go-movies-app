import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h2>Home Page</h2>
            <Outlet />
        </>
    );
}

export default Home;