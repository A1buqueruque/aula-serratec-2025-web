import { Link, NavLink} from "react-router"

export const NavBar = () =>{

    return(
        <>
            <NavLink to="/" style={({isActive}) =>({
                color: isActive ? "red" : "black"
            })}>Home</NavLink>
            <NavLink to="/form" style={({isActive}) =>({
                 color: isActive ? "red" : "black"
            })}>Form</NavLink>
        </>
    )
}