import React from "react";
import ItemWrapper from "../ItemWrapper/ItemWrapper";
import JobCard from "../JobCard/JobCard";

const Table = ({ category, applications, moveItem, deleteApp }) => {
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div>
      <JobCard title={title}>
        {applications.map((apps) => (
          <ItemWrapper
            key={apps.id}
            apps={apps}
            moveItem={moveItem}
            deleteApp={deleteApp}
          />
        ))}
      </JobCard>
    </div>
  );
};

export default Table;
