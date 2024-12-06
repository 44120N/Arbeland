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
                        display: "flex",
                        p: "15% 10%",
                    }}
                    className="radialbg"
                >
                    <Stack
                        sx={{
                            border: "3px solid black",
                            padding: "4% 5%",
                            borderRadius: "32px",
                            backgroundColor: "#fff",
                        }}
                        direction={'column'}
                        gap={3}
                    >
                        <Stack direction={'column'} gap={1}>
                            <Typography variant="h2" component={'h1'} fontSize={'5em'} color="primary">
                                Learn beyond limits.
                            </Typography>
                            <Typography variant="p" color="black_blue">
                                Arbeland provides a comprehensive stream of
                                knowledge that is easy to access, anytime, anywhere.
                            </Typography>
                        </Stack>
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
