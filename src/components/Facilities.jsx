import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Busstop from "../assets/bus-stop.png";
import atm from "../assets/atm.png";
import Firestation from "../assets/fire-station.png";
import Hospital from "../assets/clinic.png";
import Policestation from "../assets/police-station.png";
import Watersource from "../assets/water-source.png";
import Toilet from "../assets/toilets.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FacilitiesContainer = ({ setName }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imageSize = isSmallScreen ? "4rem" : "8rem";
  const textSize = isSmallScreen ? "body2" : "h6";

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginTop: "2rem", color: "#242565" }}
      >
        <span style={{ textDecoration: "underline" }}>FACILITIES</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          background: "white",
          width: "100%",
          height: "15.75rem",
          position: "relative",
          overflowX: "auto",
        }}
      >
        <Box key={1} sx={{ textAlign: "center" }}>
          <img
            src={Busstop}
            alt="Busstop"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Busstop");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            {"BUS\nSTOP"}
          </Typography>
        </Box>
        <Box key={2} sx={{ textAlign: "center" }}>
          <img
            src={atm}
            alt="atm"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Atm");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            ATM
          </Typography>
        </Box>
        <Box key={3} sx={{ textAlign: "center" }}>
          <img
            src={Hospital}
            alt="Hospital"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Hospital");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            HOSPITAL
          </Typography>
        </Box>
        <Box key={4} sx={{ textAlign: "center" }}>
          <img
            src={Watersource}
            alt="Watersource"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Watersource");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            {"WATER\nSOURCE"}
          </Typography>
        </Box>
        <Box key={5} sx={{ textAlign: "center" }}>
          <img
            src={Policestation}
            alt="Policestation"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Policestation");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            {"POLICE\nSTATION"}
          </Typography>
        </Box>
        <Box key={6} sx={{ textAlign: "center" }}>
          <img
            src={Toilet}
            alt="Toilet"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Toilet");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            TOILET
          </Typography>
        </Box>
        <Box key={7} sx={{ textAlign: "center" }}>
          <img
            src={Firestation}
            alt="Firestation"
            style={{
              marginBottom: "10px",
              width: imageSize,
              height: imageSize,
              cursor: "pointer",
            }}
            onClick={() => {
              setName("Firestation");
              handleScroll();
            }}
          />
          <Typography variant={textSize} style={{ whiteSpace: "pre-line" }}>
            {"FIRE\nSTATION"}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default FacilitiesContainer;
