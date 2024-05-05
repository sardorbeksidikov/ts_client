import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Footer from "./Footer";
import Main from "./Main";
import { ChildrenType } from "./Home.type";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Layout = ({ children }: ChildrenType) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Main>{children}</Main>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
