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
