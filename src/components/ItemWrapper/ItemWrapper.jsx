import React from "react";
import Item from "../Items/Item";

const ItemWrapper = ({ apps, moveItem, deleteApp }) => {
  const { _id, name, position, jobId, date } = apps;

  let newDate = new Date(date).toLocaleDateString();
  const newAppsProp = { _id, name, position, jobId, newDate };

  return (
    <div>
      <Item apps={newAppsProp} moveItem={moveItem} deleteApp={deleteApp} />
    </div>
  );
};

export default ItemWrapper;
