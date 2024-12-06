import { Stack, Typography, Container, TextField } from "@mui/material";
import ColorPallete from "../components/ColorPalette";
import Button from "../components/Button";
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
                    <Stack gap={1}>
                        <Button
                            bgcolor="black_blue.main"
                            bdcolor="#000"
                            color="white"
                        >
                            "black_blue" #040720
                        </Button>
                        <Button
                            bgcolor={"primary.main"}
                            bdcolor={"#000"}
                            color="white"
                        >
                            "primary.main" primary.main
                        </Button>
                        <Button
                            bgcolor="secondary.main"
                            bdcolor={"#000"}
                            color="primary"
                        >
                            "secondary.main" #93c5fd
                        </Button>
                        <Button
                            bgcolor="tertiary.main"
                            bdcolor={"#000"}
                            color="white"
                        >
                            "tertiary.main" #2075b8
                        </Button>
                        <Button
                            bgcolor="white.main"
                            bdcolor={"#000"}
                            color="primary"
                        >
                            "white.main" #c9dcfa
                        </Button>
                        <Stack direction={"row"} gap={1}>
                            <Button
                                bgcolor={"#fff"}
                                color="#000"
                                bdcolor={"#000"}
                                sx={{ width: "3.5em" }}
                            >
                                A
                            </Button>
                            <Button
                                bgcolor={"#fff"}
                                color="#000"
                                bdcolor={"#000"}
                                sx={{ width: "3.5em" }}
                            >
                                A
                            </Button>
                            <Button
                                bgcolor={"#fff"}
                                color="#000"
                                bdcolor={"#000"}
                                sx={{ width: "3.5em" }}
                            >
                                A
                            </Button>
                            <Button
                                bgcolor={"#fff"}
                                color="#000"
                                bdcolor={"#000"}
                                sx={{ width: "3.5em" }}
                            >
                                A
                            </Button>
                        </Stack>
                    </Stack>
                    <Stack>
                        <TextField
                            variant="outlined"
                            sx={{
                                transition: "all 0.2s ease-in-out",
                                outline: "1px solid black",
                                outlineOffset: "5px",
                                borderRadius: "6px",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "black_blue.main",
                                    borderWidth: "1px",
                                    borderRadius: "8px",
                                    "& .Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white.main",
                                            borderWidth: "3px",
                                        },
                                    },
                                },
                            }}
                        />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
