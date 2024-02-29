import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import { selectCards } from "../../features/ProductsCardsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductsPartition = () => {
  const cards = useSelector(selectCards);
  return (
    <>
      <Grid container sx={{ mb: 2, mt: 2 }} spacing={1}>
        {cards?.map((card) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Link to={`/${card.identifier}`} key={card.id} style={{textDecoration:"none"}}>
              <Card
                key={card.id}
                sx={{
                  maxWidth: 345,
                  bgcolor: "primary.main",
                  color: "seconadary.main",
                  ml: 8,
                  mb: 4,
                  mr: 8,
                }}
                xs={12}
                sm={6}
                md={8}
                lg={12}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{
                      width:"100%",
                      maxWidth:"100%",
                      height:"35vh"
                    }}
                    image={card.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary" sx={{fontSize:"16px" , color:"blue"}}>
                    نمایش
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsPartition;
