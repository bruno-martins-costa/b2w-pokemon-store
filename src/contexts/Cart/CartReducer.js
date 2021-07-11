export function CartReducer(state, action) {
  const { type, payload } = action;
  const { cartType } = { ...payload };
  const cartList = state.carts[cartType];

  const toggleIsCartOpen = () => {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  };

  const createItemIntoCartByType = () => {
    const pokemon = cartList.find(({ name }) => name === payload.name);
    
    if (!pokemon) {
      return {
        ...state,
        carts: {
          ...state.carts,
          [cartType]: [...cartList, { ...payload, quantity: 1 }],
        },
      };
    }

    return {
      ...state,
      carts: {
        ...state.carts,
        [cartType]: cartList.map((cartItem) =>
          cartItem.name === payload.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      },
    };
  };

  const addItemFromCart = () => {
    return {
      ...state,
      carts: {
        ...state.carts,
        [cartType]: cartList.map((cartItem) =>
          cartItem.name === payload.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      },
    };
  };

  const subtractItemFromCart = () => {
    const editingPokemon = cartList.find(
      (pokemon) => pokemon.name === payload.name
    );

    if (editingPokemon.quantity === 1) {
      return {
        ...state,
        carts: {
          ...state.carts,
          [cartType]: cartList.filter(
            (cartItem) => cartItem.name !== payload.name
          ),
        },
      };
    }

    return {
      ...state,
      carts: {
        ...state.carts,
        [cartType]: cartList.map((cartItem) =>
          cartItem.name === payload.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      },
    };
  };

  const clearCartByType = () => {
    return {
      ...state,
      carts: {
        ...state.carts,
        [cartType]: [],
      },
    };
  };

  const setStateReducerTypes = {
    TOGGLE_IS_CART_OPEN: toggleIsCartOpen,
    CREATE_ITEM_INTO_CART_BY_TYPE: createItemIntoCartByType,
    ADD_ITEM_FROM_CART: addItemFromCart,
    SUBTRACT_ITEM_FROM_CART: subtractItemFromCart,
    CLEAR_CART_BY_TYPE: clearCartByType,
  };

  return setStateReducerTypes[type]() || state;
}
