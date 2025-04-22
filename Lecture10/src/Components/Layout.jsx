import { Outlet, Link } from "react-router-dom";
function Layout(){
    return (
        <>
        <Link to="/">Home</Link> 
        <br />
        <Link to="/bread">Bread</Link>
        <br />
        <Link to="/cookies">Cookies</Link>
        <br />
        <Link to="/cake">Cake</Link>
        <br />
        <Outlet/>
        </>
    )
}
export default Layout;