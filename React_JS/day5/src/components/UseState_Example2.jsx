import { useState } from "react";

export default function UseState_Example2() {
  const [chooseProduct, setChooseProduct] = useState(1);

  const products = [
    { id: 1, name: "Iphone 3" },
    { id: 2, name: "Iphone 4" },
    { id: 3, name: "Iphone 5" },
  ];

  //radio
  const handleGetValueClick = (id) => {
    setChooseProduct(id);
  };

  return (
    <>
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <label htmlFor="">{product.name}</label>
              <input
                type="radio"
                value={product.id}
                onChange={(e) => handleGetValueClick(e.target.value)}
                checked={+chooseProduct === product.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
