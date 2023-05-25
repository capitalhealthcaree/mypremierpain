import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import React from "react";

export const PatientPortal = () => {
  return (
    <>
      <Header />

      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <iframe
          src="https://login.healthfusion.com?ct=yhf"
          scrolling="no"
          style={{
            width: "300px",
            height: "320px",
            border: "none",
            position: "relative",
          }}
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default PatientPortal;
