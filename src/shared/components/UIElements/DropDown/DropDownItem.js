import React from "react";

const DropDownItem = ({ item, counter }) => {
  const price = item.discount === 0 ? item.price : item.discountedPrice;
  return (
    <li className="clearfix flex flex-col md:flex-row">
      <div className="">
        <img
          src={`${process.env.REACT_APP_ASSET_URL}${item.images[0].formats.thumbnail.url}`}
          alt="item1"
        />
      </div>
      <div className="flex flex-col">
        <div className="">
          <span className="item-name">Sony DSC-RX100M III</span>
        </div>
        <div className="">
          <span className="text-red-700">${price}</span>
        </div>
        <div className="">
          <span className="item-quantity">Quantity: {counter[item.id]}</span>
        </div>
      </div>
    </li>
  );
};

export default DropDownItem;
