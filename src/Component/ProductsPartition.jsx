import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import { selectCards } from "../features/ProductsCardsSlice";
import { useSelector } from "react-redux";
const ProductsPartition = () => {
  const cards = useSelector(selectCards);
  return (
    <>
      <Grid container sx={{ mb: 2, mt: 2 }} spacing={1}>
        {cards?.map((card) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
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
                    width: {
                      xl: "400px",
                      lg: "300px",
                      md: "150px",
                      sm: "150px",
                    },
                  }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsPartition;
