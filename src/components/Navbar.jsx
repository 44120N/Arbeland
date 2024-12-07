import React, { useState } from "react";
import Button from "./Button";
import {
    AppBar,
    Toolbar,
    Typography,
    Button as MuiButton,
    Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
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

    const forumDropdown = [
        {
            name: "Mathematics",
            link: "/#",
        },
        {
            name: "Informatics",
            link: "/#",
        },
    ];

    return (
        <>
            <Drawer
                list={menuItems}
                title="Menu"
                active={mobileOpen}
                setActive={setMobileOpen}
                bgcolor={"primary.main"}
                color={"#fff"}
                bdcolor={"#000"}
            />
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "primary.main",
                    boxShadow: "none",
                    borderBottom: "solid 3px",
                    borderColor: "black_blue.main",
                    color: "#fff",
                }}
            >
                <Toolbar>
                    <Button
                        color={"#fff"}
                        bgcolor={"primary.main"}
                        bdcolor={"#000"}
                        onClick={() => setMobileOpen(true)}
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            padding: "1%",
                        }}
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

                    <Stack
                        sx={{ display: { xs: "none", sm: "flex" } }}
                        direction={"row"}
                        gap={2}
                    >
                        <MuiButton
                            color="inherit"
                            component={Link}
                            to="./"
                            sx={{ textTransform: "capitalize" }}
                        >
                            Home
                        </MuiButton>
                        <MuiButton
                            color="inherit"
                            component={Link}
                            sx={{ textTransform: "capitalize" }}
                            to="./about"
                        >
                            About
                        </MuiButton>
                        <Dropdown
                            bgcolor={"primary.main"}
                            color={"#fff"}
                            bdcolor={"secondary.main"}
                            items={forumDropdown}
                            sx={{
                                boxShadow: "none",
                                "&:hover": {},
                                transition: "none",
                                minWidth: 0,
                            }}
                        >
                            Study
                        </Dropdown>
                        <MuiButton
                            color="inherit"
                            component={Link}
                            sx={{ textTransform: "capitalize" }}
                            to="/login"
                        >
                            Login
                        </MuiButton>
                    </Stack>
                    {/* <Stack>
                        <Button
                            bgcolor={"#fff"}
                            color="#000"
                            bdcolor={"#000"}
                            sx={{ padding:"0.3em" }}
                        >
                            abcd
                        </Button>
                    </Stack> */}
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
};

export default Navbar;
