import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <div className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Atelier React</div>
          <div className="flex space-x-4">
          <Link to="/events" className="text-white hover:text-gray-300">
             My Events
            </Link>
            <Link to="/events" className="text-white hover:text-gray-300">
              Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
