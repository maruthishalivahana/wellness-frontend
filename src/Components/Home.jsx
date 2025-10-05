import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">
                <Outlet /> {/* This renders the current page */}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
