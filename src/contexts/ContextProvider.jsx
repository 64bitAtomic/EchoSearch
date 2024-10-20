import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search74.p.rapidapi.com/?query=";
const apiKey =
  "fb7370fb6a5ad9f147f967b0c25fabd547f7a3918e592b7acb342d03a58bb7cf";

export const ResultContextProvider = ({ children }) => {
  const [results, setReults] = useState([]);
  const [news, setNews] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("None");

  const getImages = async (term) => {
    const response = await fetch(
      `/api/search.json?engine=google_images&q=${term}&api_key=${apiKey}`
    );
    const data = await response.json();
    setImages(data.images_results);
  };
  const getVideos = async (term) => {
    const response = await fetch(
      `/api/search.json?engine=google_videos&q=${term}&api_key=${apiKey}`
    );
    const data = await response.json();
    setVideos(data.video_results);
  };
  const getNews = async (term) => {
    const response = await fetch(
      `/api/search.json?engine=google_news&q=${term}&api_key=${apiKey}`
    );
    const data = await response.json();
    setNews(data.news_results);
  };

  const getResults = async (term) => {
    setIsLoading(true);
    console.log("Provider SearchTerm: " + term);
    // FETCHING Results FROM API
    const response = await fetch(
      `https://google-search74.p.rapidapi.com/?query=${term}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "641e273762mshe54709304f4be54p1ab3cdjsn8b28fa65c08a",
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    setReults(data.results);

    //Fetching images from Api
    getImages(term);

    getVideos(term);

    getNews(term);

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        getResults,
        isLoading,
        setSearchTerm,
        searchTerm,
        images,
        videos,
        news,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultsContext = () => useContext(ResultContext);
