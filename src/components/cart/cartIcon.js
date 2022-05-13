import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import CardIcon from '../../images/add_card.svg';
import { toggleCart } from '../../redux/cart/cart.actions'

function CartIcon ({ toggleCart, itemCount }) {
  return (
    <div className="cart"  onClick={toggleCart}>
      <img src={CardIcon} alt='cart' />
      <span className="item-count-data">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCart())
})


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
