import React, { useState } from "react";
import '../app/globals.css';

import Header from '@/components/general/header';
import Footer from '@/components/general/footer';
import ContactForm from "@/components/contact/form";

const ContactPage: React.FC = () => {
  const [hoveredInfo, setHoveredInfo] = useState("");

  const handleSubmit = (email: string, message: string, service: string) => {
    console.log({ email, message, service });
  };

  return (
    <>
      <Header setHoveredInfo={setHoveredInfo} />
      <ContactForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default ContactPage;
