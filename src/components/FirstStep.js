import React, { useCallback } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { flexJustifyEnd } from "../common/styleObjects";

export default function FirstStep({handleChange, formValidation, handleNext, formValues}) {
    const variant = 'outlined'
    const margin = "normal";
    const { firstName, lastName, email, gender } = formValues;

    const isError = useCallback(() => {
        const fields = { firstName, lastName, email, gender };
        return Object.keys(fields).some(name => formValues[name] === '' || formValidation[name] !== '');
    }, [firstName, lastName, email, gender, formValues, formValidation])
    
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        label="First Name"
                        name="firstName"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={handleChange}
                        error={!!formValidation.firstName}
                        helperText={formValidation.firstName}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        placeholder="Your last name"
                        value={lastName}
                        onChange={handleChange}
                        error={!!formValidation?.lastName}
                        helperText={formValidation?.lastName}
                        required={true}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        label="Email"
                        name="email"
                        placeholder="Your email address"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        error={!!formValidation?.email}
                        helperText={formValidation?.email}
                        required={true}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        select
                        SelectProps={{
                            native: true
                        }}
                        label="Gender"
                        name="gender"
                        value={gender}
                        onChange={handleChange}
                        error={!!formValidation?.gender}
                        helperText={formValidation?.gender}
                        required={true}
                    >
                        <option value=""> </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </TextField>
                </Grid>
            </Grid>

            <Box sx={flexJustifyEnd}>
                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    disabled={isError()}
                    color="primary"
                    onClick={!isError() ? handleNext : () => null}
                >
                    Next
                </Button>
            </Box>
        </>
    );
}
