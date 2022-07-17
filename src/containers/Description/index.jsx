import React, { Fragment } from 'react';

import PaperInformation from '../../components/PaperInformation';
import LocationInformation from '../../components/LocationInformation'

import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

const Description = ({ userState }) => {
    const { bio } = userState;
    return (
        <Fragment>
            <Stack sx={{ justifyContent: 'center' }}>
                <Typography variant="body1">
                    { !!bio ? bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa labore molestias, id accusamus omnis consectetur vero iste veniam ut non, modi sint at provident, aut praesentium aliquid reiciendis sapiente!' }
                </Typography>
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} />
        </Fragment>
    );
}

export default Description;
