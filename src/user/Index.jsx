import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CarouselSlide from "../Component/CarouselSlide";
import ChessJourney from "../Component/ChessJourney";
import OnlineCourse from "../Component/OnlineCourseSlide";
import SliderSection from "../Component/SliderSection";
import ChessSection from "../Component/ChessSection";
import LogoCarousel from "../Component/LogoCarousel";
import TeamSection from "../Component/TeamSection";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";
import Header from "../Component/Header";


const Index = () => {
  return (
    <div className="container-fluid py-2">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        {/* Logo Section */}
     <Header/>
<CarouselSlide/>
<ChessJourney/>
<OnlineCourse/>
<SliderSection/>
<ChessSection/>
<LogoCarousel/>
<TeamSection/>
<Testimonials/>
<Footer/>
      </div>
    </div>
  );
};

export default Index;
