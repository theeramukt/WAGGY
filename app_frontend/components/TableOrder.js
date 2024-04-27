import React from "react";

const brandData = [
  {
    username: "wagggy",
    email: "waggy@gmail.com",
    product: ["dog bed", "collar", "feeder"],
    totalprice: "130",
  },
  {
    username: "wagggy",
    email: "waggy@gmail.com",
    product: ["dog bed", "feeder"],
    totalprice: "230",
  },
  {
    username: "wagggy",
    email: "waggy@gmail.com",
    product: ["feeder"],
    totalprice: "330",
  },
  {
    username: "wagggy",
    email: "waggy@gmail.com",
    product: ["dog bed", "collar", "feeder"],
    totalprice: "430",
  },
];

const TableOrder = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Order 
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-row dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              product Name
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              total price
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.username}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <ul>
                {brand.product.map((p) => (
                  <ll>
                    <p className="text-black dark:text-white">{p}</p>
                  </ll>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.totalprice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOrder;
