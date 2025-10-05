import React from "react";
// other homepage sections
import { HeroSection } from "./HeroSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { Insurance } from "./Incurence";
import { Achievements } from "./Achivements";
import { Locations } from './Locations'
const Home = () => {
    return (
        <>
            <HeroSection />
            <WhyChooseUs />
            <Insurance />
            <Achievements />
            <Locations />
        </>
    );
};

export default Home;
