"use client";

import React, { useState } from "react";
import '../app/globals.css';

import Header from '@/components/general/header';
import Footer from '@/components/general/footer';
import Section1 from '@/components/websites/section1';
import Section2 from '@/components/websites/section2';
import Section3 from '@/components/websites/section3';

const WebsitesPage: React.FC = () => {
    const [hoveredInfo, setHoveredInfo] = useState("");

    return (
        <>
          <div className="fixed top-0 left-0 right-0 z-10">
            <Header setHoveredInfo={setHoveredInfo} />
          </div>
          <Section1 />
          <Section2 />
          <Section3 />
          <Footer />
        </>
    );
};

export default WebsitesPage;
