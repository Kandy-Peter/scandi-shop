import React from 'react';
import CartItem from './cartItem';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCart } from '../../redux/cart/cart.actions'

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="items-container">
          {cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          :
          <div className="empty-card">Your bag is empty!</div>
          }
      </div>
      <div className="btns">
        <div className="bag-button" onClick={() => {
          history.push('/checkoutCard');
          dispatch(toggleCart())
        }}>
            VIEW BAG
        </div>
        <div className="checkout btn">
          CHECK OUT
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart)) 