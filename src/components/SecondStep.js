import React, { useCallback } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { flexJustifyEnd, mt3 } from "../common/styleObjects";

export default function SecondStep({ handleChange, formValidation, formValues, handleBack, handleNext }) {
  const variant = 'outlined'
  const margin = "normal";
  const { city, date, phone, agreenemt, zip } = formValues;

  const isError = useCallback(() => {
    const fields = { city, date, phone, agreenemt };
    return Object.keys(fields).some(name => formValues[name] === '' || formValidation[name] !== '');
  }, [city, date, phone, agreenemt, formValues, formValidation])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            value={city}
            onChange={handleChange}
            error={!!formValidation?.city}
            helperText={formValidation?.city}
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Zip Code"
            name="zip"
            placeholder="xxxxxx"
            value={zip}
            onChange={handleChange}
            error={!!formValidation?.zip}
            helperText={formValidation?.zip}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="date"
            type="date"
            defaultValue={date}
            onChange={handleChange}
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            value={phone}
            onChange={handleChange}
            error={!!formValidation?.phone}
            helperText={formValidation?.phone}
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt}
                onChange={handleChange}
                name="agreenemt"
                color="primary"
                required={true}
              />
            }
            label="Agree to terms and conditions"
          />
          <FormHelperText error={!!formValidation?.agreenemt}>
            {formValidation?.agreenemt}
          </FormHelperText>
        </Grid>
      </Grid>

      <Box sx={{ ...flexJustifyEnd, ...mt3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
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
