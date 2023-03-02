import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ButtonLink } from '../button-link';
import { AppBar } from './styles';

export class Header extends React.Component {
    render() {
        return (
            <AppBar position="relative">
                <Grid container alignItems="center" justifyContent="center">
                    <ButtonLink to="/">
                        <Typography variant="h1">GetGround Books</Typography>
                    </ButtonLink>
                </Grid>
            </AppBar>
        );
    }
};
