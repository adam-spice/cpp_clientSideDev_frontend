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
        <BrandGrid />
      </Suspense>
    </>
  );
};

export default HomePage;
