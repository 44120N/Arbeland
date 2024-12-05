// move this to Home.jsx later

import { Stack, Typography } from "@mui/material";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

export default function Landing() {
    const logoSrc = "./arbeland.png";
    return (
        <>
            <Stack direction={"row"}>
                <Stack
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        bgcolor: "white.main",
                        display: "flex",
                        p: "15% 10%",
                    }}
                >
                    <Stack
                        sx={{
                            outline: "3px solid black",
                            outlineOffset: "5vw",
                            borderRadius: "4px",
                        }}
                    >
                        <Typography variant="h1">
                            Learn beyond limits.
                        </Typography>
                        <Typography>
                            Arbeland provides a comprehensive stream of
                            knowledge that is easy to access, anytime, anywhere.
                        </Typography>
                        <Stack sx={{ alignItems: "end" }}>
                            <Button
                                color={"#fff"}
                                bgcolor={"#93c5fd"}
                                bdcolor={"#000"}
                                sx={{ width: "8em", height: "3.5em", p: 2 }}
                            >
                                More Info
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack>asas</Stack>
        </>
    );
}
