import React from "react";
import data from "../../data/msGrid";

const MsGrid = () => {
  return (
    <section className="grid grid-cols-2 place-items-center gap-5 pb-10 text-center sm:py-10 lg:grid-cols-4">
      {data?.map((item) => {
        const { id, image, title } = item;

        return (
          <div key={id}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
          </div>
        );
      })}
    </section>
  );
};

export default MsGrid;
