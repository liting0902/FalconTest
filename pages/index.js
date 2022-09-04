import React from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
function Index({ data }) {
  //   console.log(data.articles[0]);
  return (
    <React.Fragment>
      <h1>熱門新聞</h1>
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
    </React.Fragment>
  );
}
export async function getServerSideProps({ context, params }) {
  let result;
  try {
    result = await axios(
      `https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79`
    );
  } catch (error) {
    result = null;
  }
  const data = result !== null && result.status === 200 ? result.data : false;

  return {
    props: {
      data: data,
    },
  };
}

export default Index;
