import { styled } from "@mui/material/styles"

export const Container = styled('div')(({ theme }) => ({
    padding: theme.spacing(10, 2),
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.contrastText})`,
    '& h1': {
        color: '#fff'
    }
}))