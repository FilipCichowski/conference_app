import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { Container } from "@mui/material";
import { borders } from "@mui/system";
import { ListSubheader } from "@mui/material";

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
    const { error, details, url } = this.state;

    //this.state.details.map((detail) => console.log(detail));

    return (
      <Container maxWidth="xl" style={{paddingBottom: "5vh"}}>
        <ImageList sx={{ mx: "auto", width: "80vw" }} gap={15} cols={2}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontSize: 40,
                paddingLeft: 0,
                background: "#050709",
                color: "#ffffff",
                paddingTop: "3vh",
                paddingBottom: "3vh",
              }}
            >
              See photos grom previous editions
            </ListSubheader>
          </ImageListItem>
          {details.map((item) => (
            <ImageListItem
              key={item.img}
              style={{ border: 0, borderRadius: 10 }}
            >
              <img
                src={`${url}${item.picture.url}?w=100&fit=crop&auto=format`}
                srcSet={`${url}${item.picture.url}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.year}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.year}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.year}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
}

export default Gallery;
