import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const CustomAccordion = ({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
}) => {
  const categoriesArray = [...categories];
  const brandsArray = [...brands];
  return (
    <Accordion preExpanded={[1]} allowMultipleExpanded>
      <AccordionItem uuid={1}>
        <AccordionItemHeading>
          <AccordionItemButton>Categories</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {categoriesArray.length > 0 && (
            <>
              <div className="md:flex md:items-start mb-6">
                <label className="md:w-full block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    checked={selectedCategory === ""}
                    type="checkbox"
                    onChange={(e) => setSelectedCategory("")}
                  />
                  <span className="text-sm">All</span>
                </label>
              </div>
              {categoriesArray.map((c) => (
                <div key={c} className="md:flex md:items-start mb-6">
                  <label className="md:w-full block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      checked={c === selectedCategory}
                      type="checkbox"
                      onChange={(e) => setSelectedCategory(c)}
                    />
                    <span className="text-sm">{c}</span>
                  </label>
                </div>
              ))}
            </>
          )}
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid={2}>
        <AccordionItemHeading>
          <AccordionItemButton>Brands</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {brandsArray.length > 0 && (
            <>
              <div className="md:flex md:items-start mb-6">
                <label className="md:w-full block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    checked={selectedBrand === ""}
                    type="checkbox"
                    onChange={(e) => setSelectedBrand("")}
                  />
                  <span className="text-sm">All</span>
                </label>
              </div>
              {brandsArray.map((b) => (
                <div key={b} className="md:flex md:items-start mb-6">
                  <label className="md:w-full block text-gray-500 font-bold">
                    <input
                      className="mr-2 leading-tight"
                      checked={b === selectedBrand}
                      type="checkbox"
                      onChange={(e) => setSelectedBrand(b)}
                    />
                    <span className="text-sm">{b}</span>
                  </label>
                </div>
              ))}
            </>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
