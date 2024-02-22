// Import necessary modules and assets
import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography,
  IconButton,
} from "@mui/material";
import DrawerComp from "./Drawer.jsx";
import DropDown from "./DropDown.jsx";

// Header component
const Header = () => {
  // State for managing the selected tab
  const [value, setValue] = useState(0);

  // Accessing the theme object
  const theme = useTheme();

  // Media query for responsiveness
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // Array of page names
  const pages = ["Home", "Facilities", "Places", "Complaint", "Contact"];

  return (
    <div>
      <AppBar sx={{ background: "rgba(0,0,0,0.9)" }}>
        <Toolbar sx={{ Height: "5rem" }}>
          {isMatch ? (
            // Mobile view
            <>
              <Typography sx={{ fontSize: "3rem", paddingLeft: "5%" }}>
                MapGPS
              </Typography>
              <DrawerComp />
            </>
          ) : (
            // Desktop view
            <>
              <Typography sx={{ fontSize: "3rem", paddingLeft: "5%" }}>
                MapGPS
              </Typography>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                sx={{ marginLeft: "auto" }}
              >
                {pages.map((page, index) => (
                  // Tab for each page
                  <Tab key={index} label={page} sx={{ fontSize: "1.5rem" }} />
                ))}
              </Tabs>
              <IconButton id="google_translate_element" />
              <DropDown />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
