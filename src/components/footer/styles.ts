import { styled } from "@mui/material/styles";

export const StyledFooter = styled("footer")(({ theme }) => ({
    color: "#fff",
    padding: '32px',
    background: `linear-gradient(180deg, ${theme.palette.primary.contrastText}, ${theme.palette.primary.main})`,
    '& h3': {
        color: '#fff',
        fontSize: '24px',
        fontWeight: '700'
    }
}));