import { styled } from '@mui/material/styles'
import { Button, ButtonProps } from '@mui/material'

export const MuiButton = styled(Button)<ButtonProps>(() => ({
    padding: ".2em .4em",
    margin: ".2em",
    border: "2px solid",
    borderRadius: "20px",
}))