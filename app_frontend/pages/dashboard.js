"use client";
import React, { useState, ReactNode } from "react";
import ChartTotal from "../components/ChartTotal";
import ChartBestSeller from "../components/ChartBestSeller";
import ChartDog from "../components/ChartDog";
import ChartCat from "../components/ChartCat";
import CardDataStats from "../components/CardDataStats";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const ECommerce = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-3 2xl:gap-7.5">
                <CardDataStats
                  title="Current Customer"
                  total="245 Customers"
                  children="/logo-right.png"
                >
                </CardDataStats>
                <CardDataStats
                  title="Current Product"
                  total="24 Products"
                  children="/checkout_dog.png"

                >
                </CardDataStats>
                <CardDataStats
                  title="Overall Money"
                  total="$2780.5"
                  children="/cat_banner.png"

                >
                </CardDataStats>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartTotal />
                <ChartBestSeller/>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartDog/>
                <ChartCat />
              </div>
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
