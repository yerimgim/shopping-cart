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

const Entry = styled.main``;

export default Item;
