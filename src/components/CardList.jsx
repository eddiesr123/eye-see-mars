import { Grid } from "@material-ui/core";
import React from "react";
import Card from "./Card";

const CardList = ({ photos, handleClickOpen }) => {
  const renderCards = () => {
    return photos.map((photo) => {
      return (
        <Grid key={photo.id} item xs={12} sm={6} md={4} lg={3}>
          <Card photo={photo} handleClickOpen={handleClickOpen} />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {renderCards()}
    </Grid>
  );
};

export default CardList;
