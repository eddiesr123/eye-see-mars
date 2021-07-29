import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setEarthDate } from "../actions";
import { DATE_FORMAT } from "../constants";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(
    moment().subtract(1, "days")
  );
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    dispatch(setEarthDate(moment(selectedDate).format(DATE_FORMAT)));
  }, [dispatch, selectedDate]);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          minDate={moment("2011-11-26").format(DATE_FORMAT)}
          maxDate={moment().format(DATE_FORMAT)}
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
