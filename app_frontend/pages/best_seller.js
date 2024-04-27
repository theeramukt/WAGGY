import Navbar from "../components/Navbar";
import Item from "../components/Item";
import Image from "next/image";
import Link from "next/link";

export default function best_seller() {
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
                <button className="btn btn-all_product">All Products</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="container">
          <div className="row g-0 gx-">
            <button className="bg-title mb-10 rounded  transition-colors ">
              top seller dog products
            </button>
          </div>
        </div>
      </div>

      <div className="four-box-row">
        {/* product 1 */}
        <Item
          imgSrc="/bed.jpg"
          title="Dog Bed"
          price="30"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 6 */}
        <Item
          imgSrc="/product-holder.jpg"
          title="Water and Treat Holder"
          price="16"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 11 */}
        <Item
          imgSrc="/product-shampoo.jpg"
          title="Dog Shampoo"
          price="16"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 15 */}
        <Item
          imgSrc="/product-waste.jpg"
          title="Dog Waste Bag"
          price="17"
          description="A comfortable bed for your dog." // Add the actual description here
        />
      </div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-0 gx- align-items-end">
              <button className="bg-title mt-6 mb-6 rounded  transition-colors ">
                top seller cat products
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="four-box-row">
        {/* product 1 */}
        <Item
          imgSrc="/product-donut-cat.jpg"
          title="Cat Cave"
          price="39"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 4 */}
        <Item
          imgSrc="/product-house-cat.jpg"
          title="Cat House"
          price="40"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 5 */}
        <Item
          imgSrc="/product-hand-cat.jpg"
          title="Hand Woven Cat Bed"
          price="26"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 6 */}
        <Item
          imgSrc="/product-cardboard-cat.jpg"
          title="Cat Scratcher Cardboard"
          price="16"
          description="A comfortable bed for your dog." // Add the actual description here
        />
      </div>
      <footer className="line_down h-20 text-center text-brown-500 mt-12">
        <p>W A G G Y</p>
        <p>Best Destination For Your Pets</p>
      </footer>
    </div>
  );
}
