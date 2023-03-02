import { Link as RouterLink } from 'react-router-dom'
import { styled } from "@mui/material/styles";
import type { LinkProps } from './button-link';

export const Link = styled(RouterLink, {
    shouldForwardProp: (prop) => prop !== "variant"
})<LinkProps>(({ theme, variant }) => ({
    textDecoration: 'none',
    color: variant ? theme.palette.primary[variant] : "#fff",
    '&:hover': {
        color: variant === 'main' ? theme.palette.primary.light  : theme.palette.primary.contrastText
    }
}))