import React from "react";
import image from "../../../../assets/img/cars-drifting-cars-formula-drift-nissan-silvia.jpg";

const Hero = () => {
  return (
    <div className="hidden md:block">
      <div
        className="py-20 bg-center bg-cover "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-black uppercase">
            Delivery
          </h2>
          <h3 className="text-2xl mb-8 text-white">
            Wherever you are in the world we have a range of delivery options to
            make sure you get your items as quickly as possible!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
