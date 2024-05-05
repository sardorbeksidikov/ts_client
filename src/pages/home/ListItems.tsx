import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";

export const mainListItems = (
  <React.Fragment>
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Asosiy" />
      </ListItemButton>
    </Link>
    <Link to="/orders" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Buyurtmalar" />
      </ListItemButton>
    </Link>
    <Link to="/customers" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Mijozlar" />
      </ListItemButton>
    </Link>
    <Link to="/smm" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <MailOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="SMS marketing" />
      </ListItemButton>
    </Link>
    <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Xizmatlar" />
      </ListItemButton>
    </Link>
    <Link to="/settings" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Sozlamalar" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
