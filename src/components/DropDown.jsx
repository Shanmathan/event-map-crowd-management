// Import necessary modules and assets
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { account } from "../config/AppWriteConfig";
import { useNavigate } from "react-router-dom";

// AccountMenu component is responsible for rendering the account settings dropdown menu
export default function AccountMenu() {
  // anchorEl is used to anchor the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  // navigate is a hook from react-router-dom used for navigation
  const navigate = useNavigate();
  // open is a boolean indicating whether the dropdown menu is open
  const open = Boolean(anchorEl);
  // email and password are state variables used for login
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  // handleLogin is the function that is called when the login form is submitted
  const handleLogin = () => {
    // createEmailSession is a method from the account object that starts a new email session
    const promise = account.createEmailSession(email, password);
    promise.then(
      function (response) {
        console.log(response);
        // navigate to the admin page after successful login
        navigate("/adminpage");
      },
      function (error) {
        console.log(error);
      }
    );
  };

  // handleClick is the function that is called when the account settings button is clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // handleClose is the function that is called when the dropdown menu is closed
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > :not(style)": { m: 1, width: "25ch" },
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            label="email"
            variant="standard"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </Menu>
    </>
  );
}
