import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from "@mui/material";

export default function ColorPallete(props) {
    let black_blue = "#040720";
    let secondary = "#93c5fd";
    let tertiary = "#2075b8";

    let white = "#c9dcfa";
    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            black_blue: theme.palette.augmentColor({
                color: {
                    main: black_blue,
                },
                name: "black_blue",
            }),
            secondary: theme.palette.augmentColor({
                color: {
                    main: secondary,
                },
                name: "secondary",
            }),
            tertiary: theme.palette.augmentColor({
                color: {
                    main: tertiary,
                },
                name: "tertiary",
            }),
            white: theme.palette.augmentColor({
                color: {
                    main: white,
                },
                name: "white",
            }),
        },
    });
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
