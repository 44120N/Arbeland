import { useState } from "react";
import { Container, Stack } from "@mui/material";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

export default function Home() {
    const items = [
        { name: "Youtube", link: "https://www.youtube.com" },
        { name: "Facebook", link: "https://www.facebook.com" },
        { name: "Google", link: "https://www.google.com" },
    ];    
    return (
        <Container sx={{margin: "2% 0"}}>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
            >
                <div>
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
                    <br/>
                    <Dropdown items={items} color={'#fff'} bgcolor={'#93c5fd'} bdcolor={'#000'}>Social</Dropdown>
                </div>
            </Stack>
        </Container>
    );
}
