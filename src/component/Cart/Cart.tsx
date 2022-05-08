import styled from 'styled-components';
import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../app/App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Entry>
      <h2>User shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items</p> : null}
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </Entry>
  );
};

const Entry = styled.aside`
  width: 100%;
  padding: 20px;
`;

export default Cart;
