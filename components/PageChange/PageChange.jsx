import { ArrowPathIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function PageChange({ path }) {
  return (
    <div className="fixed z-40 w-full h-full top-0 left-0">
      <div className="bg-cover fixed z-40 w-full h-full top-0 left-0"></div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute dark:bg-black bg-opacity-50"></div>
      <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block mb-4">
          <ArrowPathIcon
            size={52}
            className="fas fa-circle-notch animate-spin le-text-blue mx-auto text-6xl"
          />
        </div>
      </div>
    </div>
  );
}
