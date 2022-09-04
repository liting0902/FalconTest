import React from "react";
import Image from "next/image";
import logo from "../../public/image/microsoft.png";
export default function Search() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "2rem", height: "2rem" }}>
        <Image src={logo}></Image>
      </div>
      <h5 style={{ color: "gray" }}>Microsoft Bing</h5>
    </div>
  );
}
