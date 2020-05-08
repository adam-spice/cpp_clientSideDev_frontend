import React, { lazy, Suspense } from "react";

import Hero from "../../shared/components/UIElements/Hero/Hero";
import Spinner from "../../shared/components/UIElements/Spinner/Spinner";
const LatestOffers = lazy(() =>
  import("../components/LatestOffers/LatestOffers")
);
const BrandGrid = lazy(() => import("../components/BrandGrid/BrandGrid"));

const HomePage = ({ products }) => {
  return (
    <>
      <Hero />
      <LatestOffers products={products} />
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <p className="container mb-8 text-lg">
          From driftcar to dragcar, racecar to showcar, our experienced team can
          advise you on products to suit your needs when modifying your car
          whether it be after market bolt on parts, right through to specialised
          high performance tuning parts.
        </p>
        <p className="container mb-8 text-lg">
          We can supply you with a wide range of top quality genuine brands, at
          very competitive prices, quickly and easily. If we wouldn't use it on
          our own race car, we wouldn't sell it to you - thats the trust we put
          in our own products
        </p>
        <BrandGrid />
      </Suspense>
    </>
  );
};

export default HomePage;
