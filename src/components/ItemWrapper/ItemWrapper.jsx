import React from 'react';
import Item from '../Items/Item';

const ItemWrapper = ({
  apps,
  moveItem,
  deleteConfirmModal,
  handleSelectedCard,
}) => {
  const { _id, name, position, jobId, date } = apps;

  let newDate = new Date(date).toLocaleDateString();
  const newAppsProp = { _id, name, position, jobId, newDate };

  return (
    <Item
      apps={newAppsProp}
      moveItem={moveItem}
      deleteConfirmModal={deleteConfirmModal}
      handleSelectedCard={handleSelectedCard}
    />
  );
};

export default ItemWrapper;
