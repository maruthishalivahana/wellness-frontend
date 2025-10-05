import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Body = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">
                <Outlet /> {/* Only page content renders here */}
            </main>
            <Footer />
        </div>
    );
};

export default Body;
