import {
  Typography,
  CardContent,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Grid
} from "@mui/material";
import { useSelector } from "react-redux";
const DigitalProductsCardContent = () => {
  const selectedCategory = useSelector(
    (state) => state.digitalProducts.selectedCategory
  );
  let data;
  switch (selectedCategory) {
    case "products":
      data = [
        { title: "Product 1", content: "Product 1 description" },
        { title: "Product 2", content: "Product 2 description" },
        { title: "Product 3", content: "Product 3 description" },
        // { title: 'Product 4', content: 'Product 4 description' },
        // { title: 'Product 5', content: 'Product 5 description' },
        // { title: 'Product 6', content: 'Product 6 description' },
      ];
      break;
    case "cars":
      data = [
        { title: "Car 1", content: "Car 1 description" },
        { title: "Car 2", content: "Car 2 description" },
        { title: "Car 3", content: "Car 3 description" },
        // { title: 'Car 4', content: 'Car 4 description' },
        // { title: 'Car 5', content: 'Car 5 description' },
        // { title: 'Car 6', content: 'Car 6 description' },
      ];
      break;
    case "foods":
      data = [
        { title: "Food 1", content: "Food 1 description" },
        { title: "Food 2", content: "Food 2 description" },
        { title: "Food 3", content: "Food 3 description" },
        // { title: 'Food 4', content: 'Food 4 description' },
        // { title: 'Food 5', content: 'Food 5 description' },
        // { title: 'Food 6', content: 'Food 6 description' },
      ];
      break;
    default:
      data = [];
  }

  return (
    <>
       <Grid container sx={{ mb: 2, mt: 2 }} spacing={1}>
      {data.map((item, index) => (
         <Grid item xs={12} sm={10} md={6} lg={6}>
        <Card
          key={index}
          sx={{
            maxWidth: 400,
            bgcolor: "primary.main",
            color: "seconadary.main",
            ml: 8,
            mb: 4,
            mr: 5,
            mt: 6,
            height: "300px",
            
          }}
          xs={12}
          sm={6}
          md={8}
          lg={12}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140vh"
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
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              share
            </Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
      </Grid>
    </>
  );
};

export default DigitalProductsCardContent;
