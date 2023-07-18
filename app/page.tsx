"use client";
import { useState } from "react";

const initialState = {
  counterValue: 0,
};

export default function Home() {
  const [state, setState] = useState([initialState]);

  const addCounter = () => setState((prev) => [...prev, initialState]);

  return (
    <>
      <header className="text-gray-600 body-font bg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Counter</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <p className="mt-24 text-4xl font-semibold">Couter</p>
        <button
          type="button"
          className="mt-12 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={addCounter}
        >
          Add Counter
        </button>
        <div className="flex gap-x-5">
          {state.map((each, index) => (
            <div
              className="overflow-hidden mt-10 mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6"
              key={index}
            >
              <div className="">
                <div className="p-5 text-white text-center text-3xl bg-purple-900">
                  <span>Counter {index + 1}</span>
                </div>
                <div className="p-5 pb-0 text-white text-right text-3xl bg-purple-800">
                  <input
                    type="text"
                    value={each.counterValue}
                    disabled
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="This is placeholder"
                  />
                </div>
                {/* <div className="p-5 text-white text-right text-3xl bg-purple-800">
                = <span className="text-orange-500">2100</span>
              </div> */}
                <div className="flex justify-center my-12">
                  <div className="flex px-5 gap-x-10">
                    <button
                      type="button"
                      className="!w-full py-3 px-4  gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                    >
                      Button
                    </button>
                    <button
                      type="button"
                      className="!w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
