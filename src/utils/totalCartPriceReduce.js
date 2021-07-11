export const totalCartPriceReduce = (cartArray) => {
  if (!cartArray) return 0;
  return cartArray.reduce(
    (total, current) => (total += handlePriceByQuantity(current)),
    0
  );
};

export const handlePriceByQuantity = ({ quantity, price }) => {
  if (!quantity || !price) return;
  return quantity > 1 ? price * quantity : price;
};
