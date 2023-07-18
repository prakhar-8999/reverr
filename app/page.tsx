"use client";
import { useState } from "react";

const initialState = {
  counterValue: 0,
};

export default function Home() {
  const [state, setState] = useState([initialState]);

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
        {state.map((each) => (
          <div className="overflow-hidden mt-10 mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
            <div className="">
              <div className="p-5 text-white text-center text-3xl bg-purple-900">
                <span className="text-orange-500">Calcu</span>lator
              </div>
              <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">
                2000 + 100
              </div>
              <div className="p-5 text-white text-right text-3xl bg-purple-800">
                = <span className="text-orange-500">2100</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
