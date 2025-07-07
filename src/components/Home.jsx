import NavBar from "./NavBar.jsx";
import { Outlet, Link } from "react-router-dom";

function Home({basketTotal}) {
    return(
        <>
        <div>
            <NavBar basketTotal={basketTotal}/>
            <Outlet />
        </div>
        </>
    )
};

export default Home;