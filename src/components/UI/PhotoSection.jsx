import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";

import React from "react";

class Cover extends React.Component {
  // Props - header, content, side-bool(disply side of picture), image
  render() {
    return (
      <div>
        <Box sx={{ my: 5 }}>
          <Grid container direction="row" alignItems="center" spacing={5}>
            {this.props.side && (
              <Grid item xs={12} md={7} noWrap>
                <Box sx={{ borderRadius: 4, overflow: "hidden" }}>
                  <img src={this.props.image} style={{ width: "100%" }} />
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={5} noWrap>
              <Box sx={{my:2 ,ml:3}}>
              <Typography variant="h2" component="h2" >
                {this.props.header}
              </Typography>
              </Box>
              <Typography variant="body1">{this.props.content}</Typography>
            </Grid>
            {!this.props.side && (
              <Grid item xs={12} md={7} noWrap>
                <Box sx={{ borderRadius: 4, overflow: "hidden"}}>
                  <img src={this.props.image} style={{ width: "100%", height: "100%" }} />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Cover;
