import { Outlet, Link } from "react-router-dom";

function Home() {
    return(
        <>
            <div>This is my shop, please click on one of the above buttons to begin</div>
            <Link to="shop">Shop page</Link>
            <Outlet />
        </>
    )
};

export default Home;