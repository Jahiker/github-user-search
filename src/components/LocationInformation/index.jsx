import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({ userState }) => {
    const {
        location,
        twitter_username,
        blog,
        company
    } = userState;
    return (
        <Grid 
            container
            spacing={2}
            sx={{ 
                marginTop: '15px'
             }}
        >
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <LocationOnIcon />
                    <Typography>{ location }</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <TwitterIcon />
                    <Typography>{ !!twitter_username ? twitter_username : 'n/a' }</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <LanguageIcon />
                    <a href={blog} target='__blank'>
                        <Typography>{ !!blog ? blog : 'n/a' }</Typography>
                    </a>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <BusinessIcon />
                    <Typography>{ !!company ? company : 'n/a' }</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default LocationInformation;
