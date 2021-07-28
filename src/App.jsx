import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import photosApi from "./apis/api";
import "./App.css";
import CameraSelect from "./components/CameraSelect";
import CardList from "./components/CardList";
import DatePicker from "./components/DatePicker";
import Scroll from "./components/Scroll";

const App = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    photosApi
      .get(
        "/rovers/curiosity/photos?earth_date=2013-06-03&api_key=DEMO_KEY&page=1"
      )
      .then(({ data }) => setPhotos(data.photos));
  }, []);

  return !photos ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">EYE SEE MARS</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item lg={2}>
          <DatePicker />
        </Grid>
        <Grid item lg={1}>
          <CameraSelect />
        </Grid>
        {/* <Grid item lg={3}>
          <CameraSelect />
        </Grid> */}
      </Grid>
      <Scroll>
        <CardList photos={photos} />
      </Scroll>
    </div>
  );
};

export default App;
