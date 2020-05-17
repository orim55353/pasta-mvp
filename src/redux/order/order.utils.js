export const addItemToOrder = (items, itemToAdd) => {
  return [...items, { ...itemToAdd }];
};

export const getTotalPrice = (order) => {
  var totalPrice = 0;

  order.dishes.map((dish) => (totalPrice += dish.price));

  return totalPrice;
};
