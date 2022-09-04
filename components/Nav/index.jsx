import React from "react";
import routerConfig from "../../lib/routeConfig.js";
import NavItem from "./NavItem.jsx";

export default function Nav(params) {
  return (
    <>
      <div
        style={{
          display: "inlie",
          width: "auto",
          height: "auto",
          fontSize: "1rem",
        }}
      >
        {routerConfig.map((data) => (
          <NavItem
            key={data.path}
            path={data.path}
            title={data.title}
            group={data.group}
            Icon={data.icon}
          />
        ))}
      </div>
    </>
  );
}
