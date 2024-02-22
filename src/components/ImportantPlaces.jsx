import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import SagarBeaach from "../assets/sagarbeach.jpg";
import SagarLighthouse from "../assets/sagar_lighthouse.jpg";
import Sajnekhali from "../assets/sajnekhali.jpg";
import BharatSevaAshram from "../assets/bharat_seva_aashram.jpg";
import OnkarnathTemple from "../assets/onkarnath_temple.jpg";
import KapilMuniTemple from "../assets/kapilmuni_temple.jpg";
import GangasagarMela from "../assets/pilgrimage_fair.jpg";
import Bakkhali from "../assets/bakkhali.jpg";
import NagaSadhus from "../assets/naga_sadhus.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ActionAreaCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const leftMargin = isSmallScreen ? "3vh" : "5rem";
  const topMargin = isSmallScreen ? "1vh" : "5vh";

  const places = [
    {
      image: SagarBeaach,
      title: "The Sagar Beach",
      description:
        "The Sagar Beach is located on the tip of the Sagardwip, which is popularly known as Gangasagar to most pilgrims across the world. The beach is flooded with lakhs of tourists every year as they make their way to Sagardwip for a holy dip in the Ganges.",
    },
    {
      image: SagarLighthouse,
      title: "The Sagar Lighthouse",
      description:
        "The Sagardwip has a lighthouse in the vicinity of the beach itself. The lighthouse gives you a beautiful view of the surrounding area and is open for tourists to access. Also, for all those photography fanatics, this lighthouse is the perfect place to capture snaps of this earthy town.",
    },
    {
      image: Sajnekhali,
      title: "The Sajnekhali",
      description:
        "Sajnekhali is the gateway to the Sundarbans and houses the head office of the Forest Department, covering approximately 6,110 hectares of land under Gosaba Block. The watchtowers remain the most popular because of their proximity to the resorts in the Sundarbans area.",
    },
    {
      image: BharatSevaAshram,
      title: "The Bharat Seva Ashram",
      description:
        "The Bharat Seva Ashram is a small ashram run by a non-profit trust in Gangasagar. The ashram has a small temple and offers accommodation to pilgrims and guests. The Ashram is one of the most trusted places for affordable rooms during the Gangasagar Mela.",
    },
    {
      image: OnkarnathTemple,
      title: "The Onkarnath Temple",
      description:
        "The Omkarnath Temple is another very sacred temple at Gangasagar. The temple is dedicated to Lord Omkar and his teachings. Set amidst breath-taking greenery, the temple has a very peaceful atmosphere. It is rarely crowded, and one can pray here in peace, at their own pace.",
    },
    {
      image: KapilMuniTemple,
      title: "The Kapil Muni Temple",
      description:
        "The temple dedicated to Saint Kapil Muni is the principal attraction in Sagardwip. After a holy dip in the water, pilgrims go to the temple to offer prayers to the deity. The Kapil Muni temple, along with four other temples, was destroyed in a storm in the 1960s.",
    },
    {
      image: GangasagarMela,
      title: "The Gangasagar Mela",
      description:
        "Gangasagar is part of one of the stunning riverine islands located on the southernmost tip of the Gangetic Plain, just off the Bengal coast and at the point where the river Ganga meets the Bay of Bengal. Gangasagar is a place of beauty as well as religious importance.",
    },
    {
      image: Bakkhali,
      title: "The Bakkhali",
      description:
        "Bakkhali is a small crescent-shaped beach town located on one of the most scenic deltaic islands in southern Bengal, under Namkhana Block. The beach covers an area of 8 km at a stretch, which provides one of the most beautiful views of sunrise and sunset. ",
    },
    {
      image: NagaSadhus,
      title: "The Naga Sadhus",
      description:
        "Among the crowd who visit the fair, the Naga Sadhus are the highest in numbers. Their bodies are generally smeared with ash while they perform yoga and rituals at their camps. These rituals are also attended by most devotees making it another popular attraction at the fair.",
    },
  ];

  return (
    <>
      <div>
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            marginTop: topMargin,
            marginLeft: leftMargin,
            marginRight: "auto",
          }}
        >
          <span
            style={{
              color: "#242565",
              fontFamily: "Roboto Condensed",
              fontSize: "2.5rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Popular Attractions
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            marginTop: "5rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%",
            position: "relative",
          }}
        >
          <Grid container spacing={2}>
            {places.map((place, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    margin: "1rem",
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                    textAlign: "left",
                    wordWrap: "break-word",
                    maxWidth: "100%",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      width="140"
                      image={place.image}
                      alt="green iguana"
                    />
                    <CardContent sx={{ overflow: "auto" }}>
                      <h3>{place.title}</h3>
                      <p
                        style={{
                          maxHeight: "100px",
                          overflowY: "auto",
                        }}
                      >
                        {place.description}
                      </p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
