import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";
import { Container } from "@mui/material";
import { ListSubheader } from "@mui/material";
import Typography from "@mui/material/Typography";

class Gallery extends React.Component {
  state = {
    details: [],
    error: null,
    url: "http://localhost:1337",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get("http://localhost:1337/galleries");
      this.setState({ details: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { details, url } = this.state;

    //this.state.details.map((detail) => console.log(detail));

    return (
      <Container maxWidth="xl" sx={{ paddingBottom: "5vh" }}>
        <ImageList sx={{ mx: "auto", width: "80vw" }} gap={15} cols={2}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              sx={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontSize: 40,
                paddingLeft: 0,
                background: "#050709",
                color: "#ffffff",
                paddingTop: "8vh",
                paddingBottom: "8vh",
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 600 }}>
                See photos from previous editions
              </Typography>
            </ListSubheader>
          </ImageListItem>
          {details.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${url}${item.picture.url}?w=100&fit=crop&auto=format`}
                srcSet={`${url}${item.picture.url}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.year}
                loading="lazy"
              />
              <ImageListItemBar
                title={<Typography variant="h6">{item.year}</Typography>}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
}

export default Gallery;
