import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Stack } from '@mui/material';
import PrincipalInformation from '../../components/PrincipalInformation';
import Description from '../Description';

const UserCard = ({ userState }) => {
    const { 
        avatar_url,
        login 
    } = userState;

    return (
        <Grid 
            container
            spacing={2}
            sx={{
                marginTop: '15px'
            }}
        >
            <Grid item xs={12} md={3}>
            <Avatar
                alt={login}
                src={avatar_url}
                sx={{
                    width: "100%",
                    height: "auto",
                }}
            />
            </Grid>
            <Grid item xs={12} md={9}>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ 
                        margin: '30px'
                     }}
                >
                    <PrincipalInformation userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default UserCard;