import { styled } from '@mui/material/styles'

export const Container = styled('section')(() => ({
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
}))