import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ItemWrapper from "../ItemWrapper/ItemWrapper";
import JobCard from "../JobCard/JobCard";

const Table = ({ category, applications, moveItem, deleteApp }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div>
      <JobCard title={title}>
        {applications.map((apps) => {
          const isOwn = apps.owner === currentUser?._id;
          return (
            <React.Fragment key={apps._id}>
              {isOwn && (
                <ItemWrapper
                  key={apps.id}
                  apps={apps}
                  moveItem={moveItem}
                  deleteApp={deleteApp}
                />
              )}
            </React.Fragment>
          );
        })}
      </JobCard>
    </div>
  );
};

export default Table;
