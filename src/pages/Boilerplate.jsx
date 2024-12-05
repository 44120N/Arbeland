import { Stack, Typography, Container, Button, TextField } from "@mui/material";
import ColorPallete from "../components/ColorPalette";

export default function Boilerplate() {
    return (
        <>
            <Container size="xl">
                <Stack gap={5}>
                    <Stack>
                        <Typography variant="h1">This is h1</Typography>
                        <Typography variant="h2">This is h2</Typography>
                        <Typography variant="h3">This is h3</Typography>
                        <Typography variant="h4">This is h4</Typography>
                        <Typography variant="h5">This is h5</Typography>
                        <Typography variant="h6">This is h6</Typography>
                        <Typography variant="p">
                            lorem ipsum dolor sit amet
                        </Typography>
                    </Stack>
                    <Stack>
                        <Button
                            sx={{ bgcolor: "black_blue.main" }}
                            color="white"
                        >
                            "black_blue" #040720
                        </Button>
                        <Button sx={{ bgcolor: "primary.main" }} color="white">
                            "MUI_Primary" primary.main
                        </Button>
                        <Button
                            sx={{ bgcolor: "secondary.main" }}
                            color="primary"
                        >
                            "Aaron_Blue" #93c5fd
                        </Button>
                        <Button sx={{ bgcolor: "tertiary.main" }} color="white">
                            "Arbeland_Blue" #2075b8
                        </Button>
                        <Button sx={{ bgcolor: "white.main" }} color="primary">
                            "Chrome_Blue" #c9dcfa
                        </Button>
                    </Stack>
                    <Stack>
                        <TextField sx={{}}>Abc</TextField>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
