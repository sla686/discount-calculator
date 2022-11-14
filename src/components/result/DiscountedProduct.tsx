import { useEffect, useState } from "react";

import { ClientType } from "../../types/ClientType";
import { ProductType } from "../../types/ProductType";

const DiscountedProduct = ({
  chosenCriteria,
  product,
  selectedClient,
}: {
  chosenCriteria: string[];
  product: ProductType;
  selectedClient: ClientType | undefined;
}) => {
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const result = chosenCriteria.reduce((prev, cur) => prev + Number(cur), 0);
    setDiscount(result);
  }, [chosenCriteria]);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Client: {selectedClient?.name}</p>
      <p>Original price: {product.price}$</p>
      <p>Discount: {discount}%</p>
      <p>
        Discounted price:{" "}
        {(Number(product.price) * ((100 - discount) / 100)).toFixed(2)}$
      </p>
    </div>
  );
};

export default DiscountedProduct;
