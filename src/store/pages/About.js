import React from "react";
import image from "../../assets/img/dt-about-img1.png";
import image2 from "../../assets/img/dt-about-img2.png";

const About = () => {
  return (
    <div className="container px-4">
      <div className="flex flex-col">
        <div className="py-4 text-center">
          <p>
            Since 1971 our aim has been to give you, The Scrapyard customer, the
            most complete and innovative motorsport product range available
            worldwide. So, no matter what your level or discipline, we could
            help drive you to realise your motorsport ambitions.
          </p>
        </div>
        <div className="flex py-4 justify-center items-center">
          <div className="flex-1 flex content-center text-center">
            Years of hands on motorsport experience from The Scrapyard team have
            resulted in a business that is set apart by its ability to inform,
            assist and guide customers and fellow competitors alike to navigate
            the exhilarating, all-consuming and adrenaline fuelled world of
            motorsport. Not only do we stock what we consider to be the very
            best brands in the world of motorsport but we prepare, race and
            repair with them ourselves because we sell what we believe in and
            know to be the best.
          </div>
          <div className="hidden md:block">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="flex py-4 justify-center items-center">
          <div className="flex-1 flex content-center text-center">
            Years of hands on motorsport experience from The Scrapyard team have
            resulted in a business that is set apart by its ability to inform,
            assist and guide customers and fellow competitors alike to navigate
            the exhilarating, all-consuming and adrenaline fuelled world of
            motorsport. Not only do we stock what we consider to be the very
            best brands in the world of motorsport but we prepare, race and
            repair with them ourselves because we sell what we believe in and
            know to be the best.
          </div>
          <div className="hidden md:block">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
