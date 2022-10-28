import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from "../items-in-cart";
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items);
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt
        color="white"
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} $</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  );
};
