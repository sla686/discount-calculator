import { ProductType } from "../types/ProductType";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <>
      <div className="product">
        <h3>{product.name}</h3>
        <p>{product.price}$</p>
      </div>
    </>
  );
};

export default Product;
