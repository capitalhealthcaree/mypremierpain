import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  var HandlePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup ${showPopup ? "show" : ""}`}>
      <div className="lightbox-main flex-margined-auto-responsive-block-1024 item-spacing item-widths align-items flex-direction">
        <div className="left">
          <Image src="/assets/popupimage.jpg" width="300" height="330"></Image>
        </div>
        <div className="right">
          <div
            style={{ float: "right", cursor: "pointer" }}
            onClick={HandlePopup}
          >
            &#10006;
          </div>
          <h1>You Will See</h1>
          <h1>We Care</h1>
          <p>
            To schedule a appointment with our office call our number<br></br>{" "}
            (469) 562-4188 or click the appointment button below.
          </p>
          <Link
            style={{
              fontSize: "1.2rem",
              fontFamily: "Source Sans Pro",
              letterSpacing: "0.1em",
              color: "#F1F1F1",
              fontWeight: "600",
              lineHeight: "1.2",
              backgroundColor: "#004588",
              padding: "1vh",
              marginTop: "20px",
              borderRadius: ".2vw",
              marginRight: "10px",
            }}
            href="/contact-locations"
          >
            Schedule an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
