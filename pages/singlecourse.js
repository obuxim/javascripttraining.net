import React from "react";
import Banner from "../Components/Singlecoursepage/Banner";
import Coursedetails from "../Components/Singlecoursepage/Coursedetails";
import Relatedcourse from "../Components/Singlecoursepage/Relatedcourse";

const singlecourse = () => {
  return (
    <>
      <Banner />
      <Coursedetails />
      <Relatedcourse />
    </>
  );
};

export default singlecourse;
