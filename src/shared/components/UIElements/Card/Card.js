import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className=" w-full py-6 px-3">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-56 p-4"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_ASSET_URL}${product.images[0].formats.small.url})`,
            }}
          >
            <div className="flex justify-end">
              <svg
                className="h-6 w-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
              </svg>
            </div>
          </div>
          <div className="p-4">
            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
              {product.title}
            </p>
            {product.discount > 0 ? (
              <>
                <p className="text-3xl text-gray-900">
                  <span className="text-sm line-through">${product.price}</span>
                  <span className="ml-4 text-red-500 text-2xl">
                    ${product.discountedPrice}
                  </span>
                </p>
                <p className="text-red-700 uppercase">
                  Save {product.discount}%
                </p>
              </>
            ) : (
              <p className="text-3xl text-gray-900">${product.price}</p>
            )}
            <div>
              {product.tags.length > 0 &&
                product.tags.map((tag) => (
                  <div
                    key={tag.title}
                    className=" w-24 bg-red-500 text-white font-semibold rounded-lg px-4"
                  >
                    {tag.title}
                  </div>
                ))}
            </div>
          </div>
          {product.brand.logo.length > 0 && (
            <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
              <div className="flex flex-row justify-between items-center pt-2">
                <img
                  src={`${process.env.REACT_APP_ASSET_URL}${product.brand.logo[0].url}`}
                  style={{ width: "30%" }}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
