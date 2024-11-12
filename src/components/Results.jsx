import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./Loading";
import { useResultsContext } from "../contexts/ContextProvider";
import ReactPlayer from "react-player";
import { imageResults } from "../data/imageResults";
import { res } from "../data/results";
import { newsConst } from "../data/newsResults";
import { vid } from "../data/vidResults";
import InfoMsg from "./infoMsg";
const Results = () => {
  const { news, videos, images, results, isLoading, getResults, searchTerm } =
    useResultsContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "None") {
      //getResults(searchTerm);
    }
  }, [searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results.length > 0 ? (
            results.map(({ title, url, position }) => {
              return (
                <div key={position} className="md:w-2/5 w-full">
                  <a href={url} target="_blank" rel="noreferrer">
                    <p className="text-sm">
                      {url.length > 30 ? url.substring(0, 30) : url}
                    </p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                      {title}
                    </p>
                  </a>
                </div>
              );
            })
          ) : (
            <InfoMsg />
          )}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {images.length > 0 ? (
            images.map(({ title, thumbnail, link }, index) => {
              return (
                <a
                  key={index}
                  className="sm:p-3 p-5"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={thumbnail} alt={title} loading="lazy" />
                  <p className="w-36 break-words text-sm mt-2">{title}</p>
                </a>
              );
            })
          ) : (
            <InfoMsg />
          )}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {news.length > 0 ? (
            news
              .filter((item) => item !== item.stories)
              .map(({ title, link, source }, index) => {
                const name = source?.name || "n/a";
                link = link || "URL not avaible";
                return (
                  <div key={index} className="md:w-2/5 w-full">
                    <a
                      className="hover:underline"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <p className="text-lg  dark:text-blue-300 text-blue-700">
                      {title}
                    </p>
                    <div className="flex gap-4">
                      <p className="text-sm">
                        {link.length > 30 ? link.substring(0, 30) : link}
                      </p>{" "}
                      -
                      <a href={"/"} target="_blank" rel="noreferrer">
                        {name}
                      </a>
                    </div>
                  </div>
                );
              })
          ) : (
            <InfoMsg />
          )}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center ">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <div key={index} className="p-2">
                <ReactPlayer
                  url={video.link}
                  controls
                  width={"355px"}
                  height={"200px"}
                />
                <p className="text-lg  dark:text-blue-300 text-blue-700">
                  {video.title.length > 20
                    ? video.title.substring(0, 30)
                    : video.title}
                </p>
              </div>
            ))
          ) : (
            <InfoMsg />
          )}
        </div>
      );

    default:
      return "ERROR";
  }
};

export default Results;
