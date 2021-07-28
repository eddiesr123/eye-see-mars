import { Grid } from "@material-ui/core";
import React from "react";
import Card from "./Card";

const CardList = ({ photos }) => {
  const renderCards = () => {
    return photos.map((photo) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card photo={photo} key={photo.id} />
        </Grid>
      );
    });
  };

  return (
    <Grid container lg={12} spacing={2} justifyContent="center">
      {renderCards()}
    </Grid>
  );
};

export default CardList;
