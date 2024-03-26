"use client";

import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import type { NextPage } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetUserGeolocationDialog from "~~/components/GetUserGeolocationDialog";
import HomeHeroSection from "~~/components/HomeHeroSection";
import MapSectionHomepage from "~~/components/MapSectionHomepage";
import { LocationProvider, useLocation } from "~~/contexts/LocationContext";

const Home: NextPage = () => {

  const windowWidth = useWindowSize().width;

  if (windowWidth < 1000) {
    return (<div className="text-center h-full">
      <p className="text-6xl pt-40 p-4">
      🏗️
      </p>
      <p className=" font-bold text-2xl px-8">
      hum... It looks like you are using a mobile device.
      </p>
        
      <p className=" font-medium text-xl p-4">
      In order to use DeVolt, please try rotating your phone or use a desktop device.
      </p>
    </div>)
  }

  return (
    <LocationProvider>
      <ToastContainer stacked theme="colored" position="top-center" />
      <GetUserGeolocationDialog />
      <div className="my-16 w-full flex flex-col md:grid-cols-2 gap-4">
        <div className="mx-auto md:w-10/12 w-11/12">
          <HomeHeroSection />
          <div className="md:col-span-5 md:row-span-1 md:col-start-1 md:row-start-3 mt-6">
            <MapSectionHomepage />
          </div>
        </div>
      </div>
    </LocationProvider>
  );
};

export default Home;
