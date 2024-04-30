import Navbar from "../components/Navbar";
import Item from "../components/Item";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { query } = router;

  const [products, setProducts] = useState([]);

  // const [products, setProducts] = useState([
  //   {
  //     category: "Dog",
  //     imgSrc: "/bed.jpg",
  //     title: "Dog Bed",
  //     price: "30",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-bowl.jpg",
  //     title: "Feeding Dishes",
  //     price: "17",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-coffee.jpg",
  //     title: "Pups Coffee",
  //     price: "13",
  //     description:
  //       "SQUEAKER INSIDE - Your Pup's new favorite squeaky dog toy! Keep them entertained and energized while you sit back.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-container.jpg",
  //     title: "Dog Food Container",
  //     price: "70",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-feeder.jpg",
  //     title: "Acrylic Feeder Stand",
  //     price: "26",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-holder.jpg",
  //     title: "Water and Treat Holder",
  //     price: "16",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-leash.jpg",
  //     title: "Waterproof Dog Leash",
  //     price: "14",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-poy.jpg",
  //     title: "Dog Harness Choke",
  //     price: "50",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-rope.jpg",
  //     title: "Rope Toy",
  //     price: "29",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-set.jpg",
  //     title: "Set pet Dog Toys",
  //     price: "29",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-shampoo.jpg",
  //     title: "Dog Shampoo",
  //     price: "16",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-towel.png",
  //     title: "Bath Towel",
  //     price: "10",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-toy.jpg",
  //     title: "Plush Llama Toy",
  //     price: "18",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-treat.jpg",
  //     title: "Interactive Treat Bone",
  //     price: "20",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-waste.jpg",
  //     title: "Dog Waste Bag",
  //     price: "17",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Dog",
  //     imgSrc: "/product-wong.jpg",
  //     title: "Dog Collar",
  //     price: "9",
  //     description: "A comfortable bed for your dog.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-donut-cat.jpg",
  //     title: "Cat Cave",
  //     price: "39",
  //     description: "A snug and warm cave for your cat to sleep.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-tower-cat.jpg",
  //     title: "Cat Tree Tower",
  //     price: "199",
  //     description: "A large play tower for cats to climb and explore.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-bed-cat.jpg",
  //     title: "Kitten Bed",
  //     price: "40",
  //     description: "A soft and comfortable bed designed for kittens.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-house-cat.jpg",
  //     title: "Cat House",
  //     price: "40",
  //     description: "A cozy house for your cat to enjoy privacy.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-hand-cat.jpg",
  //     title: "Hand Woven Cat Bed",
  //     price: "26",
  //     description:
  //       "A beautifully crafted bed for cats, made from natural materials.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-cardboard-cat.jpg",
  //     title: "Cat Scratcher Cardboard",
  //     price: "16",
  //     description:
  //       "A durable cardboard scratcher that helps keep cat claws healthy.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-bowl-cat.jpg",
  //     title: "Elevated Cat Bowls",
  //     price: "19",
  //     description: "Elevated bowls to help your cat eat more comfortably.",
  //   },
  //   {
  //     category: "Cat",
  //     imgSrc: "/product-fold-cat.jpg",
  //     title: "Foldable Cat Litter Box",
  //     price: "33",
  //     description: "A foldable litter box that is easy to store and clean.",
  //   },
  // ]);

  const [filteredCategory, setFilteredCategory] = useState("");

  const [displayedProducts, setDisplayedProducts] = useState([]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData('http://127.0.0.1:3342/api/products');
  }, []);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("error", error));
  }

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProducts = products.filter(
    (product) => product.category === filter
  );

  useEffect(() => {
    if (query.filter) {
      setFilteredCategory(query.filter);
      handleFilterChange(query.filter);
    }
  }, [query]);

  useEffect(() => {
    if (filteredCategory) {
      const filtered = products.filter(
        (product) => product.category.name === filteredCategory
      );
      setDisplayedProducts(filtered);
    } else {
      setDisplayedProducts(products);
    }
  }, [filteredCategory, products]);

  const chunkProducts = (products, size) => {
    return products.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(item);
      return acc;
    }, []);
  };

  const productRows = chunkProducts(displayedProducts, 4);

  const handleAllProductsClick = () => {
    setFilteredCategory(""); // Reset category filter
    setFilter(""); // Reset product filter
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex justify-between">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-0 gx- align-items-end">
              <div className="section-header text-start mb-4">
                <h1 className="topic">Our Products</h1>
                <p>
                  Subscribe to our newsletter to getupdates about our grand
                  offers
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex justify-content-end py-6"
              style={{ marginLeft: "auto" }}
            >
              <Link
                href={{
                  pathname: "/best_seller",
                }}
                passHref
              >
                <button
                  className="btn btn-best_seller"
                  style={{ marginRight: "10px" }}
                >
                  Best Seller
                </button>
              </Link>
              <Link
                href={{
                  pathname: "/product",
                }}
                passHref
              >
                <button
                  className="btn btn-all_product"
                  onClick={handleAllProductsClick}
                >
                  All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-0 gx- align-items-end"></div>
            <div
              className="col-lg-6 d-flex justify-content-end py-20"
              style={{ marginLeft: "auto" }}
            >
              <Menu as="div">
                <Menu.Button
                  className="btn btn-all_product"
                  style={{ marginRight: "10px" }}
                >
                  Filter by category
                </Menu.Button>
                <Menu.Items className="absolute mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                        onClick={() => {
                          setFilteredCategory("Dog");
                          handleFilterChange("Dog");
                        }}
                      >
                        Dog
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                        onClick={() => {
                          setFilteredCategory("Cat");
                          handleFilterChange("Cat");
                        }}
                      >
                        Cat
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="container">
          <div className="row g-0 gx-">
            <button className="bg-title mb-10 rounded  transition-colors ">
              {filter ? `${filter} products` : "All products"}
            </button>
          </div>
        </div>
      </div>
      {productRows.map((row, index) => (
        <div key={index} className="four-box-row">
          {row.map((product, index) => (
            console.log(product.image),
            <Item
              key={index}
              imgSrc={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      ))}
      <footer className="line_down h-20 text-center text-brown-500 mt-12">
        <p>W A G G Y</p>
        <p>Best Destination For Your Pets</p>
      </footer>
    </div>
  );
}
