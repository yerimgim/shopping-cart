import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { CartItemType } from '../../app/App';

type Props = {
  item: CartItemType;
  addToCart: (clikcedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Entry>
    <div>
      <h3>{item.title}</h3>
    </div>
    <div className="item-information">
      <p>Price: ${item.price}</p>
      <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
    </div>
    <div className="img-box">
      <img src={item.image} alt={item.title} />
    </div>
    <div className="buttons">
      <Button size="small" disableElevation variant="outlined" onClick={() => removeFromCart(item.id)}>
        -
      </Button>
      <p>{item.amount}</p>
      <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
        +
      </Button>
    </div>
  </Entry>
);

const Entry = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;

  div {
    flex: 1;
  }

  .item-information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .img-box {
    text-align: center;

    img {
      max-width: 80px;
      object-fit: cover;
    }
  }
`;

export default CartItem;
