import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Card from "../../shared/components/UIElements/Card/Card";
import CustomAccordion from "../components/Accordian/Accordion";

const MainShop = () => {
  /* eslint-disable no-unused-vars */
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  /* eslint-enable no-unused-vars */
  const [products, setProducts] = useState([]);
  const [categories] = useState(new Set());
  const [brands] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest("/products");

        responseData.forEach((product) => {
          product.discountedPrice = (
            product.price -
            product.price * (product.discount / 100)
          ).toFixed(2);
          categories.add(product.categories[0].name);
          brands.add(product.brand.name);
        });
        setProducts(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [sendRequest, brands, categories]);

  const filteredProductsByCategory = products.filter((product) => {
    if (selectedCategory !== "") {
      return product.categories[0].name === selectedCategory;
    } else return product;
  });

  const filteredProductsByBrand = filteredProductsByCategory.filter(
    (product) => {
      if (selectedBrand !== "") {
        return product.brand.name === selectedBrand;
      } else return product;
    }
  );

  return (
    <div className="container px-4">
      <div className="flex">
        <div className="hidden md:block w-1/3">
          Filter
          <CustomAccordion
            categories={categories}
            brands={brands}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.length > 0 &&
            filteredProductsByBrand.map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
