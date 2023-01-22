import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { flexJustifyEnd, mt3 } from "../common/styleObjects";

export default function SecondStep({ formValues, handleBack, handleNext }) {

  const { firstName, lastName, email, gender, date, city, phone, zip } = formValues;

  const handleSubmit = () => {

    handleNext();
  };

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={firstName}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Last Name"
            secondary={lastName}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Email Address"
            secondary={email}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Gender"
            secondary={gender}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Date of birth"
            secondary={date}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="City"
            secondary={city}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Zip"
            secondary={zip || 'Not Added'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone}
          />
        </ListItem>
      </List>

      <Box sx={{ ...flexJustifyEnd, ...mt3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  );
}

// export default ThirdStep()