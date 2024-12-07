import { Stack, Typography } from "@mui/material";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

export default function Home() {
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
                        direction={"column"}
                        gap={3}
                    >
                        <Stack direction={"column"} gap={1}>
                            <Typography
                                variant="h2"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={"5em"}
                                color="primary"
                            >
                                Learn beyond limits
                            </Typography>
                            <Typography
                                variant="p"
                                textAlign={{ xs: "center", sm: "left" }}
                                color="black_blue"
                            >
                                Arbeland provides a comprehensive stream of
                                knowledge that is easy to access, anytime,
                                anywhere.
                            </Typography>
                        </Stack>
                        <Stack sx={{ alignItems: { xs: "center", sm: "end" } }}>
                            <Button
                                color={"#fff"}
                                bgcolor={"primary.main"}
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
