import React from "react";

import Card from "../../../shared/components/UIElements/Card/Card";

/* eslint-disable array-callback-return */

const LatestOffers = ({ products }) => {
  if (products) {
    return (
      <div className="container mx-auto flex flex-col items-center flex-wrap pt-4 pb-12">
        <div className="pl-4 flex justify-start items-start content-start w-full">
          <span className="font-semibold text-2xl w-full ">Latest Offers</span>
        </div>
        <div className=" flex-wrap flex flex-col items-center justify-center lg:flex-row bg-white">
          {products.map((product) => {
            if (
              product.tags.length > 0 &&
              product.tags[0].title === "Featured"
            ) {
              return (
                <div key={product.id} className="w-full md:w-1/3 xl:w-1/4 p-6 ">
                  <Card product={product} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div className="">Loading</div>;
  }
};

/* eslint-enable array-callback-return */
export default LatestOffers;
