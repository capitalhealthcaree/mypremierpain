import React from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";

export const ThankYou = () => {
  return (
    <>
      <Header />

      <div style={{ textAlign: "center", margin: "50px 0px 50px 0px" }}>
        <img
          style={{ margin: "auto" }}
          width="50%"
          height="50%"
          src="/assets/thanks-you.jpg"
        />

        <div style={{ margin: "40px 0px 20px 0px" }}>
          <Link
            href="/"
            style={{
              marginTop: "20",
              fontSize: "1.2rem",
              fontFamily: "Source Sans Pro",
              letterSpacing: "0.1em",
              color: "#F1F1F1",
              fontWeight: "600",
              lineHeight: "1.2",
              backgroundColor: "#004588",
              padding: "1vh",
              borderRadius: ".2vw",
            }}
          >
            Go To HomePage{""}
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
