import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useHttpClient } from "./shared/hooks/http-hook";
import { CartProvider } from "./shared/context/cart-context";

import Navigation from "./shared/components/UIElements/Navigation/Navigation";
import Spinner from "./shared/components/UIElements/Spinner/Spinner";
import DropDownMenu from "./shared/components/UIElements/DropDown/DropDownMenu";
import ErrorAlert from "./shared/components/UIElements/Alerts/ErrorAlert";
import Footer from "./shared/components/UIElements/Footer/Footer";

const HomePage = lazy(() => import("./store/pages/HomePage"));
const ProductDetailPage = lazy(() => import("./store/pages/ProductDetailPage"));
const CartSummary = lazy(() => import("./store/pages/CartSummary"));
const MainShop = lazy(() => import("./store/pages/MainShop"));

const App = () => {
  /* eslint-disable no-unused-vars */

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  /* eslint-enable no-unused-vars */
  const [products, setProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(`/products`);
        responseData.forEach((product) => {
          product.discountedPrice = (
            product.price -
            product.price * (product.discount / 100)
          ).toFixed(2);
        });

        setProducts(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [sendRequest]);

  let routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage products={products} />
      </Route>
      <Route path="/shop" exact>
        <MainShop />
      </Route>
      <Route path="/product/:productId" exact>
        <ProductDetailPage />
      </Route>
      <Route path="/cart" exact>
        <CartSummary />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <CartProvider>
      <Router>
        <div className="absolute bg-white w-screen h-screen font-roboto flex flex-col">
          <Navigation cartOpen={cartOpen} setCartOpen={setCartOpen} />
          <div className="flex-1">
            {cartOpen && <DropDownMenu setCartOpen={setCartOpen} />}
            {error && <ErrorAlert message="error" clearError={clearError} />}
            <Suspense
              fallback={
                <div className="container mx-auto">
                  <Spinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
