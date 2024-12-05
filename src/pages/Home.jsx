import { useState } from "react";
import { Stack } from "@mui/material";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Drawer from "../components/Drawer";

export default function Home() {
    const [drawerOpen, setDrawerOpen] = useState(false);
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
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
            >
                <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f3f3] dark:bg-[#121212]">
                    <Accordion
                        bgcolor_title={"#93c5fd"}
                        color_title={"#fff"}
                        bgcolor_text={"#fff"}
                        color_text={"#000"}
                        bdcolor={"#000"}
                        question="What is Neobrutalism?"
                        answer="Neobrutalism is a design style characterized by bold colors, strong contrasts, and a minimalistic approach, often with a 'raw' aesthetic."
                    />
                    <Button color={'#fff'} bgcolor={'#93c5fd'} bdcolor={'#000'}>Test</Button>
                </div>
            </Stack>
        </>
    );
}
