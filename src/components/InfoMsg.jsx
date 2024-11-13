import React from "react";
import { NavLink } from "react-router-dom";

const InfoMsg = () => {
  return (
    <>
      <a href="/" className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white dark:bg-gray-800 dark:border-gray-700 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 sm:size-12 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-medium sm:text-2xl text-black dark:text-white">
              You haven’t searched for anything yet. Try searching for
              something!
            </h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl text-black dark:text-white">
              You haven’t searched for anything yet. Try searching for
              something!
            </h3>

            <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Start Searching
            </p>

            <a
              target="_blank"
              className="mt-8 group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 dark:text-indigo-400 focus:outline-none focus:ring active:text-indigo-500 dark:active:text-indigo-300"
              href="https://github.com/64bitAtomic"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-5 rtl:rotate-180 text-black dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2 text-black dark:text-white"
                viewBox="0 0 1792 1792"
              >
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>

              <span className="text-sm font-medium transition-all group-hover:me-4 text-black dark:text-white">
                Veiw on GitHub
              </span>
            </a>

            {/* <p className="mt-8 font-bold text-black dark:text-white">Read more</p> */}
            <NavLink
              to="/game"
              className="mt-8 group relative -translate-y-1 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 dark:text-indigo-400 focus:outline-none focus:ring active:text-indigo-500 dark:active:text-indigo-300 ml-2"
            >
              <span className="text-sm font-medium transition-all group-hover:me-4 text-black dark:text-white">
                ⌨️ Monster Type
              </span>
            </NavLink>
          </div>
        </div>
      </a>
    </>
  );
};

export default InfoMsg;
