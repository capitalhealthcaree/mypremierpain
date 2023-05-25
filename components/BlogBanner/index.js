import React from "react";

export const BlogBanner = ({ title,image }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "6vw",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff" }}>{title}</h1>
      </div>
    </>
  );
};
