import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { CartState } from "../../interface";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../redux/store";
import Skeleton from "react-loading-skeleton";

const Cart = () => {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch();

  const [itemList, setItemList] = useState<CartState[]>([]);

  const handleAddToCart = (item: CartState) => {
    dispatch(addItem({ detail: item.product }));
  };

  const handleDeleteFromCart = (item: CartState) => {
    dispatch(deleteItem({ detail: item.product }));
  };

  const getTotalPrice = () => {
    let res = 0;
    cartList.forEach((item: CartState) => {
      res += Number(item.product.base_experience) * item.quantity;
    });
    return res;
  };

  useEffect(() => {
    setItemList(cartList);
  }, [cartList]);

  return (
    <div className="container">
      <div className="cart__wrap">
        {itemList.length !== 0 ? (
          itemList.map((item, index) => {
            return (
              <div key={index} className="cart">
                <div className="cart__preview">
                  {(
                    <img
                      src={`https://img.pokemondb.net/sprites/home/normal/2x/avif/${item.product.name}.avif`}
                      alt=""
                    />
                  ) || <Skeleton width={180} height={180} />}
                </div>
                <div className="cart__detail">
                  <h3 className="cart__name">{item.product.name}</h3>
                  <h2 className="cart__price">
                    {item.quantity} x $ {item.product.base_experience} = ${" "}
                    {Number(item.product.base_experience) * item.quantity}
                  </h2>
                  <div>
                    <button
                      className="cart__btn"
                      onClick={() => handleDeleteFromCart(item)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <button
                      className="cart__btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="cart__empty">Your cart is empty</h3>
        )}
        <hr />
        <p className="total__price">Total: $ {getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default Cart;
