import Navbar from '../components/Navbar';
import Image from 'next/image';
import Item from '../components/Item_home';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
    <div className="px-4 pt-16 bg-[#F9F3EC]"> {/* Optional background color */}
        <div className="flex flex-col md:flex-row md:space-x-36 md:items-center-1/2">
          <div className="pl-40 w-full md:w-2/5 md:items-center ">
            <Image
              src="/home_banner.png"
              alt="Promotional banner for pet products and services"
              width={530}
              height={560}
              sizes="33vw"
              style={{ width: "30%", height: "auto", align: "center" ,paddingLeft: '15%'}}
            // className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 pl-4">
            <p className="text-xm colored-home py-5">Save 20-85% OFF</p>
            <p className="text-7xl text-gray-600 responsive-text">Best</p>
            <p className="text-7xl text-gray-600 responsive-text">Destination For</p>
            <p className="text-7xl responsive-text colored-home">Your Pets</p>
            <div className='flex items-center justify-center'>
            <Link href="/product" >
              <button className="px-2 py-3 tracking-widest text-lg rounded-full w-fit button-home">Shop Now ➤ </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-20">
          {/* Order Summary section ... */}
          <div className="bg-white p-6 max-w-2xl my-auto mx-auto rounded-2xl shadow-md w-full mg-top">
            <div className="space-y">
              {/* Cart Totals */}
              <div>
                <h2 className="text-2xl text-gray-800">Dog Product</h2>
                <div className="w-28 h-1 bg-row my-2"></div>
              </div>
              <div class="flex justify-between">
                {/* product 1 */}
        <Item
          imgSrc="/bed.jpg"
          title="Dog Bed ⭐"
        />

        {/* product 2 */}
        <Item
          imgSrc="/product-bowl.jpg"
          title="Feeding Dishes"
        />
        {/* product 3 */}
        <Item
          imgSrc="/product-coffee.jpg"
          title="Pups Coffee"
        />
              </div>
              <div class="flex justify-center">
              {/* Checkout Button */}
              <Link href="/product?filter=Dog">

                  <button className="bg-home max-w-sm text-white mt-8 rounded hover:bg-row  transition-colors ">
                    view dog product
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Order Summary section ... */}
          
          <div className="bg-white p-6 max-w-2xl my-auto mx-auto rounded-2xl shadow-md w-full mg-top">
            <div className="space-y">
              {/* Cart Totals */}
              <div>
                <h2 className="text-2xl text-gray-800">Cat Product</h2>
                <div className="w-28 h-1 bg-row my-2"></div>
              </div>
              <div class="flex justify-between">
                {/* product 1 */}
        <Item
          imgSrc="/product-donut-cat.jpg"
          title="Cat Cave ⭐"
        />

        {/* product 2 */}
        <Item
          imgSrc="/product-tower-cat.jpg"
          title="Cat Tree Tower"
        />
        {/* product 3 */}
        <Item
          imgSrc="/product-bed-cat.jpg"
          title="Kitten Bed"
        />
              </div>
              {/* Checkout Button */}
              <div class="flex justify-center">
              <Link href="/product?filter=Cat">
                <button className=" bg-home max-w-sm text-white mt-8 rounded hover:bg-row transition-colors mx-auto">
                  view cat product
                </button>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="line_down h-20 text-center text-brown-500">
                    <p>W A G G Y</p>
                    <p>Best Destination For Your Pets</p>
                </footer>
      </div>
      
  );
}
