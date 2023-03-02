import { styled } from '@mui/material/styles';

import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.common.white,
      fontWeight: '700',
      fontSize: 18,
      padding: '24px'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
}))
  
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}))
  