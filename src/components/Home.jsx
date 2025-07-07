import NavBar from "./NavBar.jsx";
import { Outlet, Link } from "react-router-dom";

function Home({basketTotal}) {
    return(
        <>
        <div>Testing</div>
        <div>
            <NavBar basketTotal={basketTotal}/>
            <div>This is my shop, please click on one of the above buttons to begin</div>
            <Link to="shop">Shop page</Link>
            
        </div>
        <Outlet />
        </>
    )
};

export default Home;