import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import templeImage from "../assets/temple_ganga.jpg";
import godImage from "../assets/god_ganga.jpg";
import candleImage from "../assets/candle_ganga.jpg";
import gangasagarImage from "../assets/gangasagar_ganga.jpg";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "51.375rem",
  flexShrink: "0",
};

const CarouselComponent = () => {
  return (
    <div className="slide-container">
      <Slide
        duration={5000}
        transitionDuration={1000}
        autoplay={true}
        infinite={true}
        canSwipe={true}
        indicators={false}
        arrows={false}
      >
        <div key={1}>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${templeImage})`,
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "#efefef",
                color: "#000000",
                marginRight: "auto",
                marginLeft: "3rem",
                textAlign: "left", // Add this line to align text to the left
                wordWrap: "break-word", // Add this line to break words to the next line
                maxWidth: "300px", // Set this to the maximum width you want for your text
              }}
            >
              <h3>{"HISTORY OF GANGASAGAR"}</h3>
              <p>
                {
                  "The mentions of the ritual of Gangasangar can be found as early asthe “Mahabharatas” and the “Ramayana” establishing it to date back to around 400 BCE. Every year millions of Pilgrims set off on this journey at the auspicious time of Makar Sankranti. Literary masterpieces dating back to the 5th Century like Raghubangsham, by Maha Kabi Kalidas has reference to the devotional journey of Gangasagar. Since the Satya Yuga this journey to the Sagar Island is interweaved with a sense of faith and moksha."
                }
              </p>
            </div>
          </div>
        </div>
        <div key={1}>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${godImage})`,
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "#efefef",
                color: "#000000",
                marginRight: "auto",
                marginLeft: "3rem",
                textAlign: "left", // Add this line to align text to the left
                wordWrap: "break-word", // Add this line to break words to the next line
                maxWidth: "300px", // Set this to the maximum width you want for your text
              }}
            >
              <h3>{"MYTHOLOGICAL SIGNIFICANCE"}</h3>
              <p>
                {
                  "The tale of Gangasagar narrates how Bhagirath freed the souls of the 60,000 Sagarputras, his ancestors from the depts of hell by performing their last rites with the holy water of Ganga. It is a Legend of extrication from the tiring cycle of life and death and attain Moksha. There are numerous accounts and mentions of the Gangasagar and the punya snan in the epics Ramyana and Mahabharata."
                }
              </p>
            </div>
          </div>
        </div>
        <div key={1}>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${candleImage})`,
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "#efefef",
                color: "#000000",
                marginRight: "auto",
                marginLeft: "3rem",
                textAlign: "left", // Add this line to align text to the left
                wordWrap: "break-word", // Add this line to break words to the next line
                maxWidth: "300px", // Set this to the maximum width you want for your text
              }}
            >
              <h3>{"SOCIAL SIGNIFICANCE"}</h3>
              <p>
                {
                  "Gangasagar Mela is observed on the day of Makar Sankranti. It is not just a pilgrimage but an amalgam of faith and spirituality. It’s the harvesting season in various parts of the country, a season for new beginnings. It is a time when people from the various circles of the society come together to thank the Sun God for his Abundance."
                }
              </p>
            </div>
          </div>
        </div>
        <div key={1}>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${gangasagarImage})`,
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "#efefef",
                color: "#000000",
                marginRight: "auto",
                marginLeft: "3rem",
                textAlign: "left", // Add this line to align text to the left
                wordWrap: "break-word", // Add this line to break words to the next line
                maxWidth: "300px", // Set this to the maximum width you want for your text
              }}
            >
              <h3>{"ASTROLOGICAL SIGNIFICANCE"}</h3>
              <p>
                {
                  "The auspicious time of Makar Sankranti is a period when the Sun transits from Cancer to the Capricorn. It is the Mark for the end of Winters and the starting of longer days that bring hope for a new beginning. This is the time that the Gangasagar is celebrated."
                }
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default CarouselComponent;
