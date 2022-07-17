import React, { Fragment } from 'react';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const PrincipalInformation = ({ userState }) => {
    const { 
        created_at,
        name,
        login
     } = userState;

    return (
        <Fragment>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4">{ name }</Typography>
                <Typography variant='subtitle2'>{ created_at }</Typography>
            </Stack>
            <Typography variant='caption'>{ `@${login}` }</Typography>
        </Fragment>
    );
}

export default PrincipalInformation;
