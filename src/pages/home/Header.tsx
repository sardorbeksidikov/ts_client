import {
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { HomeType } from "./Home.type";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const HeaderTools = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: 3, width: "100%", maxWidth: "700" }}>
        <Button
          variant="contained"
          sx={{ textTransform: "none", width: "100%", maxWidth: "250px" }}
        >
          Buyurtma qo'shish
        </Button>
        <Paper
          component="form"
          sx={{
            p: "2px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "none",
            backgroundColor: "#dbdbdb",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon sx={{ color: "#000" }} />
          </Badge>
        </IconButton>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon fontSize="large" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              to="/profile"
              style={{ color: "#000", textDecoration: "none" }}
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to="/register"
              style={{ color: "#000", textDecoration: "none" }}
            >
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

const Header = ({ open, toggleDrawer }: HomeType) => {
  return (
    <div>
      <AppBar
        position="absolute"
        open={open}
        sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#000" }} fontSize="large" />
          </IconButton>
          <Box sx={{ width: "100%" }}>
            <HeaderTools />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
