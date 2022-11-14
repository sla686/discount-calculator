import { ProductType } from "../types/ProductType";
import { FaTimesCircle } from "react-icons/fa";

const Product = ({
  product,
  delProduct,
}: {
  product: ProductType;
  delProduct: (id: string, type: string) => void;
}) => {
  return (
    <>
      <div className="product">
        <h3>{product.name}</h3>
        <p>{product.price}$</p>
        <FaTimesCircle
          className="circle"
          onClick={() => delProduct(product.id, "product")}
        />
      </div>
    </>
  );
};

export default Product;
