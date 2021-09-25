import React from "react";
import Content from "./Content";
import Hero from "./Hero";

export default function SearchView({ keyword, searchResults }) {
  const title = `You Are Searching For ${keyword}`;
  const resultHtml = searchResults.map((obj, i) => {
    return <Content movies={obj} key={i} />;
  });
  const RenderSearchResult = () => {
    if (searchResults.length > 3) {
      return (
        <>
          {resultHtml && (
            <div className="d-flex flex-wrap justify-content-center">
              {resultHtml}
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-center text-light my-4">
            There is no results for your search . Try again !
          </h1>
        </>
      );
    }
  };
  return (
    <>
      <Hero title={title} />
      <RenderSearchResult />
    </>
  );
}
