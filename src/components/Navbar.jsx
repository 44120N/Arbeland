import React, { useState } from "react";
import Button from "./Button";
import {
    AppBar,
    Toolbar,
    Typography,
    Button as MuiButton,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        {
            label: "Home",
            onClick: () => console.log("Home clicked"),
            href: "/#",
        },
        {
            label: "About",
            onClick: () => console.log("About clicked"),
            href: "/#",
        },
        {
            label: "Contact",
            onClick: () => console.log("Contact clicked"),
            href: "/#",
        },
    ];

    return (
        <>
            <Drawer
                list={menuItems}
                title="Menu"
                active={mobileOpen}
                setActive={setMobileOpen}
                bgcolor={"#93c5fd"}
                color={"#fff"}
                bdcolor={"#000"}
            />
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    borderBottom: "solid 3px",
                    borderColor: "black_blue.main",
                    color: "black_blue.main",
                }}
            >
                <Toolbar sx={{p:0}}>
                    <Button
                        color={'#000'}
                        bgcolor={"#fff"}
                        bdcolor={"#000"}
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" }, padding: "1%" }}
                    >
                        <MenuIcon />
                    </Button>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Arbeland
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <MuiButton color="inherit" component={Link} to="/">
                            Home
                        </MuiButton>
                        <MuiButton color="inherit" component={Link} to="/about">
                            About
                        </MuiButton>
                        <MuiButton color="inherit" component={Link} to="/forum">
                            Forum
                        </MuiButton>
                        <MuiButton color="inherit" component={Link} to="/login">
                            Login
                        </MuiButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
};

export default Navbar;
