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

function DrawerComp() {
  const pages = ["Home", "Facilities", "Places", "Complaint", "Contact"];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
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
