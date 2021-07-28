import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(moment("2015-06-03"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Pick a date"
          format="YYYY-MM-DD"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
