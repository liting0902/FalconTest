import React from "react";
import Paper from "@mui/material/Paper";
import Link from "next/link";
export default function NewsCard({ urlToImage, url, newsTitle }) {
  return (
    <Paper sx={{ width: "20rem", height: "20rem", margin: "1rem" }}>
      <Link href={url}>
        <a>
          <img src={urlToImage} width="250" height="150"></img>
        </a>
      </Link>
      <h5>{newsTitle}</h5>
    </Paper>
  );
}
