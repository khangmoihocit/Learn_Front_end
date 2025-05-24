import { useState } from "react";

export default function UseState_Example3() {
  const [chooseProduct, setChooseProduct] = useState([]);

  const products = [
    { id: 1, name: "Iphone 3" },
    { id: 2, name: "Iphone 4" },
    { id: 3, name: "Iphone 5" },
  ];

  //check box
  const handleGetValueClick = (id) => {
    if (!chooseProduct.includes(+id)) {
      setChooseProduct((prev) => [...prev, +id]);
    } else {
      setChooseProduct((prev) =>
        prev.filter((idProduct) => idProduct !== +id)
      );
    }
  };

  return (
    <>
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <label htmlFor="">{product.name}</label>
              <input
                type="checkbox"
                value={product.id}
                onChange={(e) => handleGetValueClick(e.target.value)}
                //product.id co trong mang chooseProduct k
                checked={chooseProduct.includes(product.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
