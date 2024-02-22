import React, { useState } from "react";
import Header from "../components/Header";
import CarouselComponent from "../components/Carousel";
import FacilitiesContainer from "../components/Facilities";
import ImportantPlaces from "../components/ImportantPlaces";
import Map from "../components/Map";
import GoogleTranslate from "../services/GoogleTranslate";

function IntroPage() {
  const [name, setname] = useState(false);
  const handleData = (data) => {
    setname(data);
  };

  return (
    <>
      <Header />
      <CarouselComponent />
      <FacilitiesContainer setName={handleData} />
      <ImportantPlaces />
      <Map name={name} />
      <GoogleTranslate />
    </>
  );
}

export default IntroPage;
