import { createTheme } from "@mui/material/styles"

const fontSizeSmall = '1em';
const fontSizeMid = '1.5em';
const fontSizeBig = '2em';
const spaceM = '16px';

export default createTheme({
    palette: {
        primary: {
            main: "#1c444e",
            contrastText: "#cedac8",
            light: "#96ccd9"
        },
        secondary: {
            main: "#e2af74"
        }
    },
    typography: {
        fontWeightMedium: 500,
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            margin: spaceM,
            fontSize: fontSizeBig,
            marginBottom: spaceM,
            fontFamily: "Eczar"
        },
        h2: {
            margin: spaceM,
            fontSize: fontSizeMid,
            fontFamily: "Eczar"
        },
        h3: {
            margin: spaceM,
            fontSize: fontSizeMid,
            fontFamily: "Eczar"
        },
        h4: {
            margin: spaceM,
            fontSize: fontSizeSmall,
        },
        body1: {
            fontSize: fontSizeSmall
        },
        button: {
            fontSize: fontSizeBig,
            lineHeight: fontSizeBig
        }
    },
    shape: {
        borderRadius: 4
    },
    spacing: 8,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    height: '100%',
                    padding: 0,
                    margin: 0
                }
            }
        }
    }
})