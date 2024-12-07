import { Stack, Typography, Container, Divider } from "@mui/material";
import Accordion from "../components/Accordion";

export default function About() {
    return (
        <>
            <Container fixed>
                <Stack gap={5}>
                    <Stack>
                        <Typography variant="h1">About Us</Typography>
                        <Divider sx={{ borderBottom: "3px solid black" }} />
                    </Stack>
                    <Stack>
                        <Accordion
                            bgcolor_title={"#93c5fd"}
                            color_title={"#fff"}
                            bgcolor_text={"#fff"}
                            color_text={"#000"}
                            bdcolor={"#000"}
                            question="What does ARBELAND mean?"
                            answer="ARBELAND is an acronym of the three founders: Aaron, Benedict, Roland"
                        />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
