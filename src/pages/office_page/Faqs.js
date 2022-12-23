import React from "react";
import data from "../../data/faqs";

const Faqs = () => {
  return (
    <div className="p-3">
      <h2>Frequently asked questions</h2>
      <section>
        {data?.map((item) => {
          const { id, question } = item;
          return (
            <div key={id}>
              <p>{question}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Faqs;
