import React from "react";
// other homepage sections
import { HeroSection } from "./HeroSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { Insurance } from "./Incurence";
const Home = () => {
    return (
        <>
            <HeroSection />
            <WhyChooseUs />
            <Insurance />
        </>
    );
};

export default Home;
