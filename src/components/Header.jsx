import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#030303",
  },
  logo: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    marginLeft: "20px",
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
    marginRight: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {gamingLegendsLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const gamingLegendsLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Gaming Legends
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Details",
    href: "/details",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
