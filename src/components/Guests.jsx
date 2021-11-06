import React, { Component } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { Container } from "@mui/material";
import { borders } from "@mui/system";
import { ListSubheader } from "@mui/material";

class Guests extends React.Component {
  state = {
    details: [],
    error: null,
    url: "http://localhost:1337",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get("http://localhost:1337/guests");
      this.setState({ details: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, details, url } = this.state;
    return (
      <Container maxWidth="xl">
        <ImageList sx={{ mx: "auto", width: "80vw" }} gap={15} cols={3}>
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontSize: 50,
                paddingLeft: 0,
                background: "#050709",
                color: "#ffffff",
                paddingTop: "4vh",
                paddingBottom: "4vh",
              }}
            >
              Meet our guests
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
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                title={item.name}
                subtitle={item.description}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
}

export default Guests;
