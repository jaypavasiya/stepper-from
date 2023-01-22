import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { buttonBox, TypographyAlignment } from '../common/styleObjects'

const Completed = ({ handleReset }) => {
    return (
        <>
            <Typography sx={TypographyAlignment} variant="h4" align="center" component="h2">
                All steps completed
            </Typography>
            <Box sx={buttonBox} >
                <Button variant="contained" onClick={handleReset} >Reset</Button>
            </Box>
        </>
    )
}

export default Completed