// Importing necessary libraries and components
import React, { useState } from "react";
import Header from "../components/Header";
import CarouselComponent from "../components/Carousel";
import FacilitiesContainer from "../components/Facilities";
import ImportantPlaces from "../components/ImportantPlaces";
import Map from "../components/Map";
import GoogleTranslate from "../services/GoogleTranslate";

// IntroPage component
function IntroPage() {
  // State for storing name
  const [name, setname] = useState(false);

  // Function to handle data and set the name state
  const handleData = (data) => {
    setname(data);
  };

  // Component render
  return (
    <>
      <Header /> {/* Header component */}
      <CarouselComponent /> {/* Carousel component */}
      <FacilitiesContainer setName={handleData} />{" "}
      {/* Facilities container with a prop function to set name */}
      <ImportantPlaces /> {/* Important places component */}
      <Map name={name} /> {/* Map component with name prop */}
      <GoogleTranslate /> {/* Google translate service */}
    </>
  );
}

// Exporting the IntroPage component
export default IntroPage;
