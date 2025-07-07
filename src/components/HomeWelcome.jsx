import NavBar from "./NavBar.jsx";
import { Link } from "react-router-dom";

function HomeWelcome() {
    return(
        <>
        <div>
            <div>This is my shop, please click on one of the above buttons to begin</div>
            <Link to="shop">Shop page</Link>
        </div>
        </>
    )
};

export default HomeWelcome;