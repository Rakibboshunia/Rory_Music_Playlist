import React from "react";
import bg from "../assets/mainlogo.png"; // make sure this path exists

export default function AuthImage() {
  return (
    <div
      className="h-full w-full bg-cover bg-center rounded-l-none rounded-tl-3xl rounded-bl-3xl"
      style={{
        backgroundImage: `url(${bg})`,
        borderTopLeftRadius: "40px",
        borderBottomLeftRadius: "40px",
      }}
    />
  );
}
