import React from 'react';
import Item from '../Items/Item';

const ItemWrapper = ({ apps, moveItem, openModal, handleSelectedCard }) => {
  const { _id, name, position, jobId, date, notes } = apps;

  let newDate = new Date(date).toLocaleDateString();
  const newAppsProp = { _id, name, position, jobId, newDate, notes };

  return (
    <Item
      apps={newAppsProp}
      moveItem={moveItem}
      openModal={openModal}
      handleSelectedCard={handleSelectedCard}
    />
  );
};

export default ItemWrapper;
