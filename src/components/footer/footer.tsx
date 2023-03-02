import React from 'react';
import { ButtonLink } from '../button-link';
import { Grid, Typography } from "@mui/material";
import { StyledFooter } from './styles';

export class Footer extends React.Component {
    render() {
        return (
            <StyledFooter data-testid="footerTestId">
                <Grid container justifyContent="center" >
                    <Typography variant="h3">
                        <ButtonLink to='/'>
                            GetGround Books
                        </ButtonLink>
                    </Typography>
                </Grid>
            </StyledFooter >
        );
    }
};
