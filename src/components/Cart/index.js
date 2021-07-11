import { useContext } from 'react';
import { StoresContext } from '../../contexts';
import { CartContext } from '../../contexts';
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
import { CartItemCounter, QuantityInput, CartHeader, CartFooter } from '../';
import { AnimatePresence } from 'framer-motion';
import { Backdrop } from '../Backdrop';

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

  return (
    <>
      <Backdrop show={isCartOpen} onClick={toggleIsCartOpen} />

      <AnimatePresence>
        {isCartOpen && (
          <Container
            isCartOpen={isCartOpen}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ x: '100%' }}
          >
            <CartHeader
              isCartOpen={isCartOpen}
              totalCartItems={totalCartItems}
              toggleIsCartOpen={toggleIsCartOpen}
            />

            <CartList isCartOpen={isCartOpen}>
              {!carts[currentStoreType.value].length && (
                <EmptyMessage>{`O seu carrinho está vazio`}</EmptyMessage>
              )}
              {carts[currentStoreType.value].map(
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
                        <CartItemCounter quantity={quantity} />
                      </AvatarContainer>

                      <Name>{capitalizeString(name)}</Name>
                    </ItemInfo>

                    <ValueInfo>
                      <Price>
                        {formatCurrency(
                          handlePriceByQuantity({ price, quantity })
                        )}
                      </Price>
                    </ValueInfo>
                  </CartItem>
                )
              )}
            </CartList>

            <CartFooter
              totalValue={formatTotalValue}
              buttonIsDisabled={!carts[currentStoreType.value].length}
            />
          </Container>
        )}
      </AnimatePresence>
    </>
  );
}
