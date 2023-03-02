import React from 'react';
import { ViewProps } from '../../types/types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from './button';
import { Container } from './styles';

export class Banner extends React.Component<ViewProps> {
    handleLink = (searchQuery: string) => {
        const { history } = this.props
        history.push(`/search?s=${searchQuery}&p=1&r=20`)
    }

    render() {
        return (
            <Container>
                <Grid container spacing={4} textAlign="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h1">
                            Find books on our book base
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button onClick={() => this.handleLink('Ιταλία')} variant="outlined" color="primary">
                            Italian books
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button onClick={() => this.handleLink('Αυστρία')} variant="outlined" color="primary">
                            Austrian books
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button onClick={() => this.handleLink('Γερμανία')} variant="outlined" color="primary">
                            German books
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button onClick={() => this.handleLink('Ελλάδα')} variant="outlined" color="primary">
                            Greek books
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
};