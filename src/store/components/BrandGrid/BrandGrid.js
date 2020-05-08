import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import Spinner from "../../../shared/components/UIElements/Spinner/Spinner";
import ErrorAlert from "../../../shared/components/UIElements/Alerts/ErrorAlert";

const BrandGrid = () => {
  const [brands, setBrands] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(`/brands`);
        setBrands(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div className="container mx-auto p-4">
      {error && <ErrorAlert message="error" clearError={clearError} />}
      {!isLoading && (
        <>
          <div className="flex justify-start items-start content-start w-full">
            <span className="font-semibold text-2xl w-full ">Brands</span>
          </div>
          <br />
          <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-4">
            {brands.map((brand) => (
              <div key={brand.id} className="w-full max-h-32">
                <img
                  className="object-cover object-center mx-auto"
                  src={`${process.env.REACT_APP_ASSET_URL}${brand.logo[0].url}`}
                  alt={brand.logo[0].name}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {isLoading && <Spinner />}
    </div>
  );
};

export default BrandGrid;
