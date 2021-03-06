import React from "react"
import { FaTrash } from "react-icons/fa"

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item
  const { increment, decrement, removeItem } = value
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              role="button"
              onKeyDown={() => decrement(id)}
              onClick={() => decrement(id)}
              tabIndex={0}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              role="button"
              onClick={() => increment(id)}
              onKeyDown={() => increment(id)}
              tabIndex={0}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <FaTrash
            role="button"
            onClick={() => removeItem(id)}
            onKeyDown={() => removeItem(id)}
            tabIndex={0}
          />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  )
}

export default CartItem
