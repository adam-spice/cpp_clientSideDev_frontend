import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { CartContext } from "../../shared/context/cart-context";

import ImageGallery from "../../shared/components/UIElements/ImageGallery/ImageGallery";
import Button from "../../shared/components/UIElements/Button/Button";
import Spinner from "../../shared/components/UIElements/Spinner/Spinner";
import ErrorAlert from "../../shared/components/UIElements/Alerts/ErrorAlert";

const ProductDetailPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  /* eslint-disable no-unused-vars */
  const [cart, setCart] = useContext(CartContext);
  /* eslint-enable no-unused-vars */

  const addToCart = () => {
    const productToAdd = product;
    setCart((currentState) => [...currentState, productToAdd]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(`/products/${productId}`);
        const discountedPrice = (
          responseData.price -
          responseData.price * (responseData.discount / 100)
        ).toFixed(2);
        responseData.discountedPrice = +discountedPrice;

        setProduct(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [sendRequest, productId]);

  return (
    <div className="container mx-auto  pt-12 pb-12">
      {error && <ErrorAlert message="error" clearError={clearError} />}
      {isLoading && !product && <Spinner />}
      {product && (
        <div className="flex flex-col md:flex-row items-center flex-wrap">
          <h2 className="p-4 font-semibold text-2xl md:hidden">
            {product.title}
          </h2>
          <div className="sm:w-full md:w-1/3 p-4 flex-wrap flex flex-col justify-center">
            <ImageGallery images={product.images} />
            <div className="w-1/2 mt-4 mx-auto">
              <Button danger inverse onClick={addToCart}>
                add to cart
              </Button>
            </div>
          </div>
          <div className="sm:w-full md:w-2/3  p-4 flex-wrap">
            <h2 className="font-semibold text-2xl hidden md:block">
              {product.title}
            </h2>
            <div className="mt-4">
              <span
                className={`${
                  product.discount > 0 ? "line-through text-gray-500" : null
                }`}
              >
                ${product.price}
              </span>
              {product.discount > 0 ? (
                <span className="text-red-600 text-lg">
                  {" "}
                  ${product.discountedPrice}
                </span>
              ) : null}
              <br />
              <pre className="mt-4 whitespace-pre-wrap font-roboto">
                {product.description}
              </pre>
            </div>
            <br />
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetailPage;
