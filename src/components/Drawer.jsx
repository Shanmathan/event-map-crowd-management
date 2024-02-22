// Import necessary modules and assets
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";

// DrawerComp is a functional component that renders a Drawer and a MenuIcon button.
// The Drawer contains a list of pages, and the state of the Drawer (open or closed) is managed using React's useState hook.
function DrawerComp() {
  // Define the pages that will be listed in the Drawer
  const pages = ["Home", "Facilities", "Places", "Complaint", "Contact"];

  // Define a state variable for the open/close status of the Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      {/* Render the Drawer. It's open state is controlled by the openDrawer state variable. */}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {/* Map through the pages array to render each page as a ListItemButton in the Drawer */}
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {/* Display the name of the page */}
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Render the MenuIcon button. When clicked, it toggles the open/close state of the Drawer */}
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default DrawerComp;
