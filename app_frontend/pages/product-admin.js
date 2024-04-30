"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableProduct from "../components/TableProduct";

const ECommerce2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetchData('http://127.0.0.1:3342/api/products');
  }, []);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("error", error));
  }
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <TableProduct product={product}/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ECommerce2;
