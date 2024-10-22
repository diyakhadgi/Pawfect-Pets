import React from "react";
import Navbar from "../components/Navbar";
import nailcutter from "../assets/accessories/nailcutter.webp";
import lice from "../assets/accessories/lice.webp";

const Accessories = () => {
  return (
    <>
      <Navbar />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <div class="mr-2 mb-2 w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-200 dark:border-gray-200">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src={nailcutter}
              alt="product image"
              width="100%"
              height="auto"
            />
          </a>
          <div class="px-5 pb-5">
            <div class="py-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-900">
                  Dog Nail Cutter
                </h5>
              </a>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-zinc-900">
                Rs.599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class="mr-2 mb-2 w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-200 dark:border-gray-200">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src={lice}
              alt="product image"
              width="80%"
              height="auto"
            />
          </a>
          <div class="px-5 pb-5">
            <div class="py-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-900">
                Stainless Steel Hair Lice Comb Brushes Nit Free Terminator Fine Egg Dust Removal Jessica
                </h5>
              </a>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-zinc-900">
                Rs.300
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class="mr-2 mb-2 w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-200 dark:border-gray-200">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src={nailcutter}
              alt="product image"
              width="100%"
              height="auto"
            />
          </a>
          <div class="px-5 pb-5">
            <div class="py-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-900">
                  Dog Nail Cutter
                </h5>
              </a>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-zinc-900">
                Rs.599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class="mr-2 mb-2 w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-200 dark:border-gray-200">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src={nailcutter}
              alt="product image"
              width="100%"
              height="auto"
            />
          </a>
          <div class="px-5 pb-5">
            <div class="py-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-900">
                  Dog Nail Cutter
                </h5>
              </a>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-zinc-900">
                Rs.599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class="mr-2 mb-2 w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-200 dark:border-gray-200">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src={nailcutter}
              alt="product image"
              width="100%"
              height="auto"
            />
          </a>
          <div class="px-5 pb-5">
            <div class="py-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-900">
                  Dog Nail Cutter
                </h5>
              </a>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-zinc-900">
                Rs.599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
