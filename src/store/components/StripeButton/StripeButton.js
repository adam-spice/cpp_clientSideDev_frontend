import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../../assets/img/Logo.svg";
import Button from "../../../shared/components/UIElements/Button/Button";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const StripeButton = ({ price }) => {
  const stripPrice = price * 100;
  const stripeKey = "pk_test_M6BLivDDOXM6xQufTXL2f9Bd00oiNh4uNG";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Melt my credit card"
      name="The Scrapyard"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={stripPrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripeKey}
    >
      <Button danger icon={faCreditCard}>
        Melt my credit card
      </Button>
    </StripeCheckout>
  );
};

export default StripeButton;
