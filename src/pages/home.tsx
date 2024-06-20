"use client";

import React, { useState } from "react";

import Header from '@/components/general/header';
import Footer from '@/components/general/footer';
import Section1 from '@/components/home/section1/section1';

const HomePage: React.FC = () => {
    const [hoveredInfo, setHoveredInfo] = useState("");

    return (
        <>
          <Header setHoveredInfo={setHoveredInfo} />
          <Section1 hoveredInfo={hoveredInfo} setHoveredInfo={setHoveredInfo} />
          <Footer />
        </>
    );
};

export default HomePage;
