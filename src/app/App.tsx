import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Badge } from '@material-ui/core';
import styled from 'styled-components';

import Item from '../component/Item/Item';
import Cart from '../component/Cart/Cart';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  title: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.amount, 0);
  const handleAddToCart = (clieckedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clieckedItem.id);

      if (isItemInCart) {
        return prev.map(item => (item.id === clieckedItem.id ? { ...item, amount: item.amount + 1 } : item));
      }

      return [...prev, { ...clieckedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>error..</div>;

  return (
    <Entry>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Entry>
  );
};

const Entry = styled.main`
  margin: 40px;
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 20px;
`;

export default App;
