export const addItemToOrder = (items, itemToAdd) => {
  return [...items, { ...itemToAdd }];
};

export const deleteDish = (items, itemToUpdate) => {
  var index = items.findIndex((x) => x.id === itemToUpdate.id);
  items.splice(index, 1);

  return items;
};

export const updateDish = (items, itemToUpdate) => {
  var index = items.findIndex((x) => x.id === itemToUpdate.id);
  items[index] = itemToUpdate;

  return items;
};

export const getTotalPrice = (dishes, extras) => {
  var totalPrice = 0;

  dishes.forEach((dish) => {
    totalPrice += dish.dish.price;
    extras.map((extra) => {
      if (dish.extras.includes(extra.id)) {
        totalPrice += extra.price;
      }
    });
  });

  console.log(totalPrice, "price");

  return totalPrice;
};
