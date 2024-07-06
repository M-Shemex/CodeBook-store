import React from "react";
import { useFilter } from "../../../context";
export const FilterBar = ({ setShow }) => {
  const { state, dispatch } = useFilter();
  return (
    <div>
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Product Filters
        </h5>
        <button
          type="button"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setShow(false)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1 dark:text-white">Sort by</p>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "lowToHigh" },
                    })
                  }
                  checked={state.sortBy === "lowToHigh" || false}
                  id="price-sort-1"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - Low to High
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "highToLow" },
                    })
                  }
                  checked={state.sortBy === "highToLow" || false}
                  id="price-sort-2"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="price-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price - High to Low
                </label>
              </div>
            </li>
            <li>
              <p className="font-semibold my-1 dark:text-white">Rating</p>
              <div className="flex items-center my-1">
                <input
                  type="radio"
                  id="rating-sort-1"
                  checked={state.ratings == "4STARSABOVE" || false}
                  value=""
                  onChange={() =>
                    dispatch({
                      type: "RATING",
                      payload: {
                        ratings: "4STARSABOVE",
                      },
                    })
                  }
                />
                <label
                  htmlFor="rating-sort-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  4 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  type="radio"
                  id="rating-sort-2"
                  checked={state.ratings == "3STARSABOVE" || false}
                  value=""
                  onChange={() =>
                    dispatch({
                      type: "RATING",
                      payload: {
                        ratings: "3STARSABOVE",
                      },
                    })
                  }
                />
                <label
                  htmlFor="rating-sort-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  3 Stars & Above
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                  type="radio"
                  id="rating-sort-3"
                  checked={state.ratings == "2STARSABOVE" || false}
                  value=""
                  onChange={() =>
                    dispatch({
                      type: "RATING",
                      payload: {
                        ratings: "2STARSABOVE",
                      },
                    })
                  }
                />
                <label
                  htmlFor="rating-sort-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  2 Stars & Above
                </label>
              </div>
            </li>
            <li className="mt-1 mb-5 px-1">
              <button
                onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
                type="button"
                className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
