export const totalCartItemsReduce = (cartArray) => {
  if (!cartArray) return;
  return cartArray.reduce(
    (total, current) => (total += handleItemQuantity(current)),
    0
  );
};

const handleItemQuantity = ({ quantity }) => (quantity > 1 ? quantity : 1);
