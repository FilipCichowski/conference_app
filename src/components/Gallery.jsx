import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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

    this.state.details.map((detail) => console.log(detail));

    return (
      <ImageList variant="masonry" sx={{ mx: "auto", width: "80vw"}}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
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
    );
  }
}

export default Gallery;
