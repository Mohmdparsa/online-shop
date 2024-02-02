import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const SwipeableImage = ({ props }) => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <>
      <Carousel>
        {items.map((item, i) => (
          <Iteeem key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

const Iteeem = (props) => {
  return (
    <>
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    </>
  );
};

export default SwipeableImage;
