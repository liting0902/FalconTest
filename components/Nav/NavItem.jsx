import React from "react";
import Link from "next/link";
import FaNewspaper from "react-icons/bi";
export default function NavItem({ title, path, group, Icon }) {
  return (
    <div style={{ padding: "1rem" }}>
      <Icon />
      <Link href={group === null ? `${path}` : `${group}-${path}`}>
        <a className="navLink">{title}</a>
      </Link>
      <style jsx>{`
        .navLink {
          font-size: 1.2em;
          color: #00b4d8;
          text-decoration: none;
          vertical-align: middle;
          font-weight: bold;
        }
        .navLink:hover {
          color: #1d2d44;
        }
      `}</style>
    </div>
  );
}
