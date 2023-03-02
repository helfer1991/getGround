import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    width: '400px',
}));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      transition: theme.transitions.create('width'),
      color: '#fff',
      fontWeight: '700',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '40ch',
        },
      },
    },
}));