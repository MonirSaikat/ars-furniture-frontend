import React from 'react';
import { FaPhoenixFramework } from "react-icons/fa";
import {RiCompassesFill} from 'react-icons/ri';
import { BiAward }  from 'react-icons/bi';
import { MdOutlineSentimentVerySatisfied } from 'react-icons/md';

const TimeLine = () => {
  return (
    <div className="py-10 bg-timeline bg-blend-overlay bg-fixed bg-cover">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col items-center my-6 py-5">
          <FaPhoenixFramework className="text-7xl text-yellow-300 mb-4" />
          <p className="text-2xl mt-3 text-white">
            20 Year Of Experience
          </p>
        </div>

        <div className="flex flex-col items-center my-6 py-5">
          <RiCompassesFill className="text-7xl text-yellow-300 mb-4" />
          <p className="text-2xl mt-3 text-white">
            20+ Engineers
          </p>
        </div>

        <div className="flex flex-col items-center my-6 py-5">
          <BiAward className="text-7xl text-yellow-300 mb-4" />
          <p className="text-2xl mt-3 text-white">
            15+ Awards
          </p>
        </div>

        <div className="flex flex-col items-center my-6 py-5">
          <MdOutlineSentimentVerySatisfied className="text-7xl text-yellow-300 mb-4" />
          <p className="text-2xl mt-3 text-white">
            500+ Satisfied Clients
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
