import { Box, Container, Link } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container>
            <Container component="main">
                 <Outlet/>
            </Container>
            <Box component="footer" sx={{display: "flex", alignItems: "center", textAlign: "center"}}>
                <NavLink to="/">Albums</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
                <NavLink to="/community">VCommunity</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <NavLink to="/account">My Account</NavLink>
            </Box>
        </Container>
    )
}

export default Layout;