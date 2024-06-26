import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Checkout() {
  // State to manage alert visibility
  const [showAlert, setShowAlert] = useState(false);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [qty, setQty] = useState([]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    postalCode: "",
  });

  // Function to toggle alert visibility
  async function handleSubmit () {
    let title = products.map((product) => product.title)
    let price = products.map((product) => product.price)
    let qty = products.map((product) => product.qty)

    console.log(title, price, qty)

    const response = await fetch("http://127.0.0.1:3342/api/clearCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      }),
      // Handle response if necessary
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setShowAlert(!showAlert);
    } else {
      console.error("Error", response.status);
    }
  };
  var totalPrice = 0;
  useEffect(() => {
    fetchData("http://127.0.0.1:3342/api/orders");
    let token = localStorage.getItem("jwt_access");
  }, []);

  function fetchData(url) {
    let token = localStorage.getItem("jwt_access");
    if (token === null) {
      alert("Please login first");
      window.location.href = "/signin";
    } else {
      fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then((data) => setTitle(data.title))
        .then((data) => setPrice(data.price))
        .then((data) => setQty(data.qty))
        .catch((error) => console.log("error", error));
    }
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <Head>
        <title>Checkout Page</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      {showAlert && (
        <div className="text-center py-4 lg:px-4">
          <div
            className="p-2 bg-row items-center leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-row uppercase px-2 py-1 text-xs font-bold mr-3">
              New
            </span>
            <span className="font-semibold mr-2 text-left flex-auto">
              checking out successfully
            </span>
            <svg
              className="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </div>
      )}
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl mb-4">Make Your Checkout Here</h1>
        <p>Please register in order to checkout more quickly</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-checkout mx-auto rounded-md">
            <div className="form-container">
              <div className="form-section contact ">
                <form>
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Your Name"
                    required
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                  />
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your Address"
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                  />
                  <label htmlFor="city">Country</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="you@email.com"
                    required
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                  />
                </form>
              </div>
              <div className="form-section contact ">
                <form>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Address"
                    required
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="phone numbr"
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                  />
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    placeholder="XXXXX"
                    required
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                  />
                </form>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/checkout_dog.png"
                alt="Promotional banner for pet products and services"
                width={260}
                height={270}
              />
            </div>
          </div>
          {/* Order Summary section ... */}
          <div className="bg-white p-6 max-w-sm my-auto mx-auto rounded-2xl shadow-md w-full mg-top">
            <div className="space-y-2">
              {/* Cart Totals */}
              <div>
                <h2 className="text-2xl text-gray-800">Cart Totals</h2>
                <div className="w-12 h-1 bg-row"></div>
              </div>
              {products.map((product) => {
                totalPrice += product.price * product.qty;
              })}
              <div className="flex justify-between pt-2">
                <p className="text-gray-600">Sub Total</p>
                <p className="text-gray-800">${totalPrice}</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-gray-600">(+) Shipping</p>
                <p className="text-gray-800">$29.00</p>
              </div>
              <div className="flex justify-between pt-4 border-t">
                <p className="text-xl  text-gray-800">Total</p>
                <p className="text-xl  text-gray-800">${totalPrice + 29}</p>
              </div>

              {/* Payment Methods */}
              <div className="mt-6">
                <h2 className="text-2xl text-gray-800">Payments</h2>
                <div className="w-12 h-1 bg-row"></div>
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <label className="flex items-center space-x-3 pt-2">
                  <input
                    type="radio"
                    name="payment"
                    className="h-5 w-5 mb-2 accent-[#DEAD6F]"
                  />
                  <span className="text-gray-700">Check Payments</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className=" form-radio h-5 w-5 mb-2 accent-[#DEAD6F]"
                  />
                  <span className="text-gray-700">Cash On Delivery</span>
                </label>
                <label className="flex items-center space-x-3 pb-2">
                  <input
                    type="radio"
                    name="payment"
                    className=" form-radio h-5 w-5 mb-2 accent-[#DEAD6F]"
                  />
                  <span className="text-gray-700">PayPal</span>
                </label>
              </div>

              {/* Checkout Button */}
              <button
                className="w-full bg-row text-white pt-3 mt-8 rounded hover:bg-row  transition-colors"
                onClick={handleSubmit}
              >
                Proceed To Checkout
              </button>
              {/* Conditional rendering of the alert */}
            </div>
          </div>
        </div>
      </div>
      <footer className="line_down h-20 text-center text-brown-500 mt-12">
        <p>W A G G Y</p>
        <p>Best Destination For Your Pets</p>
      </footer>
    </div>
  );
}
