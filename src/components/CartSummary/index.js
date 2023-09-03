// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(each => {
        totalAmount += each.price * each.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            Order Total:
            <span className="order-total-amount"> Rs {totalAmount}</span>
          </h1>
          <p className="total-items-count">{cartList.length} items in cart</p>
          <button type="button" className="check-out-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
