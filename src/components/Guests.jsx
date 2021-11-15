import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";
import { Container } from "@mui/material";
import { ListSubheader } from "@mui/material";
import Typography from "@mui/material/Typography";

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
    const { details, url } = this.state;
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
                paddingTop: "8vh",
                paddingBottom: "8vh",
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 600 }}>
                Meet our guests
              </Typography>
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
                sx={{ fontFamily: "Source Sans Pro, sans-serif" }}
                title={
                  <Typography variant="h4" sx={{ fontSize: 26 }}>
                    {item.name}
                  </Typography>
                }
                subtitle={
                  <Typography variant="h6" sx={{ fontSize: 16 }}>
                    {item.description}
                  </Typography>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
}

export default Guests;
