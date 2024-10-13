import React, { useEffect, useRef, useState } from "react";
import Links from "./Links";
import { useDebounce } from "use-debounce";
import { useResultsContext } from "../contexts/ContextProvider";
const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, searchTerm } = useResultsContext();
  const [debounceValue] = useDebounce(text, 1000 * 10);

  // ZWork
  const valChange = useRef("");
  const handleText = () => {
    setText(valChange.current.value);
  };

  const handleSetSearchTerm = () => {
    setSearchTerm(text);
  };
  useEffect(() => {
    // if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        placeholder="Search"
        ref={valChange}
        onChange={handleText}
        value={text}
        type="text"
        className="sm:w-96 w-80 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      />
      {text && (
        <button
          type="button"
          className="mt-3 ml-5 absolute top-1.5 right-14 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          ✖️
        </button>
      )}

      <button
        type="button"
        className="mt-3 ml-2 absolute top-1.5 right-3 text-2xl text-gray-500"
        onClick={handleSetSearchTerm}
      >
        🔍
      </button>
      <Links />
    </div>
  );
};

export default Search;
