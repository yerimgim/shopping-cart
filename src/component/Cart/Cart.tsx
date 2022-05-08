import styled from 'styled-components';
import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../app/App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Entry>
      <h2>🛒 Shopping Cart </h2>
      {cartItems.length === 0 ? <p>No items 😂</p> : null}
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Entry>
  );
};

const Entry = styled.aside`
  width: 400px;
  padding: 20px;
`;

export default Cart;
