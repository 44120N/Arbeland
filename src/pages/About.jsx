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
                    <Stack
                        direction={{ xs: "col", md: "row" }}
                        sx={{
                            justifyContent: "space-between",
                            p: 3,
                            color: "white.main",
                        }}
                        bgcolor="tertiary.main"
                    >
                        <Stack>
                            <Typography variant={"h3"} sx={{ mb: { xs: 3 } }}>
                                Frequently Asked Questions
                            </Typography>
                        </Stack>
                        <Stack>
                            <Accordion
                                bgcolor_title={"#93c5fd"}
                                color_title={"#fff"}
                                bgcolor_text={"#fff"}
                                color_text={"#000"}
                                bdcolor={"#000"}
                                question="What do we offer?"
                                answer="ARBELAND provides courses in mathemathics and website development(frontend and/or backend)"
                            />
                            <Accordion
                                bgcolor_title={"#93c5fd"}
                                color_title={"#fff"}
                                bgcolor_text={"#fff"}
                                color_text={"#000"}
                                bdcolor={"#000"}
                                question="How much does it cost?"
                                answer="Trial first, talk about the price later. So you won't lose any money."
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: "column-reverse", md: "row" }}
                        bgcolor="tertiary.main"
                        sx={{ p: 3, justifyContent: "space-between" }}
                    >
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
                        <Stack>
                            <Typography
                                variant="h3"
                                sx={{ color: "white.main", mb:{xs:3}}}
                            >
                                Trivia
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
