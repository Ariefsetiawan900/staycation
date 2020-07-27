import React from "react";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((items, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${$index2}`}
                >
                  <div className="card">
                    {items.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light"> Choice</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
