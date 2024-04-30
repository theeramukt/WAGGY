import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Checkout from "./checkout";

const ProductRow = ({ product }) => {
  async function handleDeleteItem(event) {
    console.log("clicked");
    const response = await fetch("http://127.0.0.1:3342/api/deleteCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: product.id,
      }),
      // Handle response if necessary
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Error", response.status);
    }

    const responseCheckout = await fetch("http://127.0.0.1:3342/api/deleteCheckout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: product.id,
      }),
      // Handle response if necessary
    });
    if (responseCheckout.ok) {
      const data = await responseCheckout.json();
      console.log(data);
    } else {
      console.error("Error", responseCheckout.status);
    }

    window.location.reload();
  }

  async function handleUpdateQty(event) {
    console.log(event);
    const response = await fetch("http://127.0.0.1:3342/api/updateQty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: product?.id,
        qty: event,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } else {
      console.error("Error", response.status);
    }
  }
  const handleMinus = () => {
    if (product?.qty > 1) {
      product.qty--;
      handleUpdateQty(product?.qty);
    }
  };
  const handlePlus = () => {
    product.qty++;
    handleUpdateQty(product?.qty);
  };
  return (
    <div className="grid grid-cols-9 items-center gap-4 py-2 border-b">
      <div className="col-span-2 flex justify-center">
        <Image src={product?.image} alt={product?.alt} width={100} height={100} />
      </div>
      <div className="col-span-2 text-center">{product?.title}</div>
      <div className="col-span-1 text-center">${product?.price}</div>
      <div className="col-span-3 flex justify-center items-center">
        <button className="px-3 py-1 border" onClick={handleMinus}>
          -
        </button>
        <input
          type="text"
          className=" number px-3 py-1 border mx-2 text-center w-12"
          defaultValue={product?.qty}
        />
        <button className="px-3 py-1 border" onClick={handlePlus}>
          +
        </button>
      </div>

      {/* Trash button */}
      <div
        className="col-span-1 flex justify-center"
        onClick={handleDeleteItem}
      >
        <i className="fas fa-trash cursor-pointer"></i>
      </div>
    </div>
  );
};

export default function Cart() {
  const [products, setProducts] = useState([null]);
  var totalPrice = 0;
  useEffect(() => {
    fetchData("http://127.0.0.1:3342/api/orders");
  }, []);

  function fetchData(url) {
    let token = localStorage.getItem("jwt_access");
    if (token === null) {
      alert("Please login first");
      window.location.href = "/signin";
    } else {
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("error", error));
  }
  }
  return (
    <div>
      <Navbar />

      <>
        <Head>
          <title>Shopping Cart</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>

        <div className="container mx-auto px-20 py-16">
          <div className="bg-row p-4">
            <div className="grid grid-cols-9 text-lg">
              <div className="col-span-2 text-center">Products</div>
              <div className="col-span-2 text-center">Name</div>
              <div className="col-span-1 text-center">Unit Price</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-1 text-center">Trash</div>
            </div>
          </div>

          <div className="mt-4">
            {products.map(
              (product) => (
                (totalPrice += product?.price * product?.qty),
                (<ProductRow key={product?.id} product={product} />)
              )
            )}
          </div>

          <div className="p-4 flex justify-between items-center mt-4 rounded">
            {/* Cart Total */}
            <div className="flex mt-6 py-20">
              <div className="flex-initial bg-row py-2 px-4 text-center">
                Cart Total
              </div>
              {/* {products.map((product) => {
                return ( */}
              <div className="flex-initial bg-price  py-2 px-4 text-center">
                ${totalPrice}
              </div>
              {/* )
              })} */}
            </div>
            <Link href="/checkout">
              <button className="checkout rounded-full px-6 flex items-center">
                CHECKOUT
                <i className="fas fa-arrow-right ml-2 "></i>
              </button>
            </Link>
          </div>
          <div className="margin-bottom"></div>
        </div>
        <footer className="line_down h-20 text-center text-brown-500 mt-12">
          <p>W A G G Y</p>
          <p>Best Destination For Your Pets</p>
        </footer>
      </>
    </div>
  );
}
