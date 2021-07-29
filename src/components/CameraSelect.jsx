import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CAMERA_TYPES } from "../constants";
import { useDispatch } from "react-redux";
import { setCamera } from "../actions";

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
    marginBottom: "5px",
  },
});

const CameraSelect = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [cameraVal, setCameraVal] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCameraVal(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(setCamera(cameraVal));
  }, [dispatch, cameraVal]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Camera</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cameraVal}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={CAMERA_TYPES.FHAZ}>{CAMERA_TYPES.FHAZ}</MenuItem>
          <MenuItem value={CAMERA_TYPES.RHAZ}>{CAMERA_TYPES.RHAZ}</MenuItem>
          <MenuItem value={CAMERA_TYPES.MAST}>{CAMERA_TYPES.MAST}</MenuItem>
          <MenuItem value={CAMERA_TYPES.NAVCAM}>{CAMERA_TYPES.NAVCAM}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CameraSelect;
