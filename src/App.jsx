import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import CameraSelect from "./components/CameraSelect";
import CardList from "./components/CardList";
import DatePicker from "./components/DatePicker";
import Scroll from "./components/Scroll";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./actions/index";
import "./App.css";
import BigImageDialog from "./components/BigImageDialog";

const useStyles = makeStyles({
  queryButton: {
    marginTop: "5px",
  },
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [clickedSearch, setClicksearch] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClickOpen = (photo) => {
    setCurrentPhoto(photo);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const photos = useSelector(({ photosReducer }) => photosReducer.photos);
  const earthDate = useSelector(
    ({ earthDateReducer }) => earthDateReducer.earthDate
  );
  const camera = useSelector(({ cameraReducer }) => cameraReducer.camera);

  const handleClick = () => {
    setClicksearch(true);
    fetchPhotos(earthDate, camera)(dispatch);
  };

  const renderContent = () => {
    if (!photos.length) {
      return clickedSearch ? (
        <h1>No available images</h1>
      ) : (
        <Fragment>
          <h1>Waiting for you...</h1>
        </Fragment>
      );
    }
    return <CardList handleClickOpen={handleClickOpen} photos={photos} />;
  };

  const renderBigImage = () => {
    return (
      currentPhoto && (
        <img
          style={{
            width: "600px",
            height: "600px",
            objectFit: "contain",
            border: 0,
          }}
          src={currentPhoto.img_src}
          alt={currentPhoto.img_src}
        />
      )
    );
  };

  useEffect(() => {
    if (photos.length) {
      setClicksearch(false);
    }
  }, [photos]);

  return (
    <div className="tc">
      <h1 className="f1">EYE SEE MARS</h1>
      <p>
        Please select a date and click "SEE MARS" button to see mars photos
        taken that very day by NASA Rovers. Take it one step further and filter
        by camera. Have FUN!!
      </p>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item lg={2}>
          <DatePicker />
        </Grid>
        <Grid item lg={1}>
          <CameraSelect />
        </Grid>
        <Grid item lg={1}>
          <Button
            onClick={handleClick}
            className={classes.queryButton}
            variant="outlined"
          >
            See Mars
          </Button>
        </Grid>
      </Grid>
      <Scroll>{renderContent()}</Scroll>
      <BigImageDialog handleClose={handleClose} open={open}>
        {renderBigImage()}
      </BigImageDialog>
    </div>
  );
};

export default App;
