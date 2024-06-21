"use client";

import React, { useState } from "react";
import '../app/globals.css';

import Header from '@/components/general/header';
import Footer from '@/components/general/footer';
import Section1 from '@/components/websites/section1';
import Section2 from '@/components/websites/section2';

const WebsitesPage: React.FC = () => {
    const [hoveredInfo, setHoveredInfo] = useState("");

    return (
        <>
          <Header setHoveredInfo={setHoveredInfo} />
          <Section1 />
          <Section2 />
          <Footer />
        </>
    );
};

export default WebsitesPage;
