import React from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
export default function Pages({ data }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data.articles.map((d) => {
        return (
          <div key={d.publishedAt}>
            <NewsCard
              urlToImage={d.urlToImage}
              url={d.url}
              newsTitle={d.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps({ context, params }) {
  const { query } = params;
  const queryPaths = query.split("-");
  let result;
  try {
    result = await axios(
      `https://newsapi.org/v2/top-headlines?${queryPaths[0]}=${queryPaths[1]}&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79`
    );
  } catch (error) {
    result = null;
  }

  const data = result !== null && result.status === 200 ? result.data : false;
  console.log("data::::", data);
  return {
    props: {
      data: data,
    },
  };
}
