import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { CartItemType } from '../../app/App';

type Props = {
  item: CartItemType;
  handleAddToCart: (clieckedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Entry>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Entry>
);

const Entry = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }

  div {
    height: 100%;
    padding: 1rem;
  }
`;

export default Item;
