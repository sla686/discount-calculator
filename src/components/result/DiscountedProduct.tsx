import { useEffect, useState } from "react";

import { ProductType } from "../../types/ProductType";

const DiscountedProduct = ({
  chosenCriteria,
  product,
}: {
  chosenCriteria: string[];
  product: ProductType;
}) => {
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const result = chosenCriteria.reduce((prev, cur) => prev + Number(cur), 0);
    setDiscount(result);
  }, [chosenCriteria]);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Original price: {product.price}$</p>
      <p>Discount: {discount}%</p>
      <p>
        Discounted price:{" "}
        {(Number(product.price) * ((100 - discount) / 100)).toFixed(2)}$
      </p>
      {/* <p>Client: </p> */}
    </div>
  );
};

export default DiscountedProduct;
