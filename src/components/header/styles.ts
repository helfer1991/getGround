import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar, AppBarProps } from '@mui/material';

export const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
}));