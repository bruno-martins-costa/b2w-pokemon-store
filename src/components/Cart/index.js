import { useContext, useMemo } from 'react';
import { StoresContext, CartContext } from '../../contexts';
import {
  Container,
  EmptyMessage,
  CartList,
  CartItem,
  AvatarContainer,
  Avatar,
  Name,
  Price,
  ItemInfo,
  ValueInfo,
} from './styles';
import {
  formatCurrency,
  capitalizeString,
  totalCartItemsReduce,
  handlePriceByQuantity,
  totalCartPriceReduce,
} from '../../utils';
import { QuantityInput, CartHeader, CartFooter, Backdrop } from '../';
import { AnimatePresence } from 'framer-motion';
import { Total } from '../CartButton/styles';

export function Cart() {
  const {
    carts,
    isCartOpen,
    toggleIsCartOpen,
    addItemFromCart,
    subtractItemFromCart,
  } = useContext(CartContext);
  const { currentStoreType } = useContext(StoresContext);

  const formatTotalValue = formatCurrency(
    totalCartPriceReduce(carts[currentStoreType.value])
  );
  const totalCartItems = totalCartItemsReduce(carts[currentStoreType.value]);

  const framerOptions = {
    initial: { x: '100%' },
    animate: { x: 0 },
    transition: { duration: 0.3 },
    exit: { x: '100%' },
  };

  const backdropMemo = useMemo(
    () => <Backdrop show={isCartOpen} onClick={toggleIsCartOpen} />,
    [isCartOpen, toggleIsCartOpen]
  );

  const cartHeaderMemo = useMemo(
    () => (
      <CartHeader
        isCartOpen={isCartOpen}
        totalCartItems={totalCartItems}
        toggleIsCartOpen={toggleIsCartOpen}
      />
    ),
    [isCartOpen, totalCartItems, toggleIsCartOpen]
  );

  const cartListMemo = useMemo(
    () => (
      <CartList isCartOpen={isCartOpen}>
        {!!currentStoreType.value && !carts[currentStoreType.value].length && (
          <EmptyMessage>{`O seu carrinho está vazio`}</EmptyMessage>
        )}
        {!!currentStoreType.value &&
          carts[currentStoreType.value].map(
            ({ name, price, image, quantity }) => (
              <CartItem key={name}>
                <ItemInfo>
                  <QuantityInput
                    handleSubtractCartItem={() =>
                      subtractItemFromCart({
                        name,
                        cartType: currentStoreType.value,
                      })
                    }
                    handleAddCartItem={() =>
                      addItemFromCart({
                        name,
                        cartType: currentStoreType.value,
                      })
                    }
                  />

                  <AvatarContainer>
                    <Avatar src={image} />
                    <Total className='counter'>{quantity}</Total>
                  </AvatarContainer>

                  <Name>{capitalizeString(name)}</Name>
                </ItemInfo>

                <ValueInfo>
                  <Price>
                    {formatCurrency(handlePriceByQuantity({ price, quantity }))}
                  </Price>
                </ValueInfo>
              </CartItem>
            )
          )}
      </CartList>
    ),
    [isCartOpen, carts, currentStoreType, subtractItemFromCart, addItemFromCart]
  );

  const cartFooterMemo = useMemo(
    () =>
      !!currentStoreType.value && (
        <CartFooter
          totalValue={formatTotalValue}
          buttonIsDisabled={!carts[currentStoreType.value].length}
        />
      ),
    [formatTotalValue, carts, currentStoreType]
  );

  return (
    <>
      {backdropMemo}
      <AnimatePresence>
        {isCartOpen && (
          <Container isCartOpen={isCartOpen} {...framerOptions}>
            {cartHeaderMemo}

            {cartListMemo}

            {cartFooterMemo}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
}
