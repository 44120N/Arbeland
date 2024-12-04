import { Stack, Typography, Container, Button } from "@mui/material";
import ColorPallete from "../components/ColorPallete";

export default function Boilerplate() {
    return (
        <>
            <ColorPallete>
                <Container size="xl">
                    <Stack gap={5}>
                        <Stack>
                            <Typography variant="h1">
                                This is The Title
                            </Typography>
                            <Typography variant="h2">
                                This is The Title
                            </Typography>
                            <Typography variant="h3">
                                This is The Title
                            </Typography>
                            <Typography variant="h4">
                                This is The Title
                            </Typography>
                            <Typography variant="h5">
                                This is The Title
                            </Typography>
                            <Typography variant="h6">
                                This is The Title
                            </Typography>
                            <Typography variant="p">
                                lorem ipsum dolor sit amet
                            </Typography>
                            <Typography variant=""></Typography>
                        </Stack>
                        <Stack>
                            <Button
                                sx={{ bgcolor: "black_blue.main" }}
                                color="white"
                            >
                                "black_blue" #040720
                            </Button>
                            <Button
                                sx={{ bgcolor: "primary.main" }}
                                color="white"
                            >
                                "MUI_Primary" primary.main
                            </Button>
                            <Button
                                sx={{ bgcolor: "secondary.main" }}
                                color="primary"
                            >
                                "Aaron_Blue" #93c5fd
                            </Button>
                            <Button
                                sx={{ bgcolor: "tertiary.main" }}
                                color="white"
                            >
                                "Arbeland_Blue" #2075b8
                            </Button>
                            <Button
                                sx={{ bgcolor: "white.main" }}
                                color="primary"
                            >
                                "Chrome_Blue" #c9dcfa
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </ColorPallete>
        </>
    );
}
