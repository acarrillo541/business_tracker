import { Link } from "react-router-dom";
import "./layout.css"

export default function Sidebar(){
    return(
        <div>
            <Link to={"/"}>
                <p>Dashboard</p>
            </Link>
            <Link to={"/projects"}>
                Projects
            </Link>
            <Link to={"/contacts"}>
                <p>Contacts</p>
            </Link>
            <Link to={"/login"}>
                <p>Login</p>
            </Link>

        </div>
    );
}