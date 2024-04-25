"use client";
import React, { useState, ReactNode } from "react";
import ChartOne from "../components/ChartOne";
import ChartThree from "../components/ChartThree";
import ChartTwo_1 from "../components/ChartTwo-1";
import ChartTwo_2 from "../components/ChartTwo-2";
import CardDataStats from "../components/CardDataStats";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableOne from "../components/TableOne";

const ECommerce2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <TableOne></TableOne>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ECommerce2;
