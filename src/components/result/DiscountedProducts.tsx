import { ClientType } from "../../types/ClientType";
import { ProductType } from "../../types/ProductType";
import DiscountedProduct from "./DiscountedProduct";

const DiscountedProducts = ({
  products,
  chosenCriteria,
  selectedClient,
}: {
  products: ProductType[];
  chosenCriteria: string[];
  selectedClient: ClientType | undefined;
}) => {
  return (
    <div className="discounted">
      <h2>Discounted Products</h2>
      {chosenCriteria.length ? (
        products.length > 0 ? (
          products.map((product) => (
            <DiscountedProduct
              key={product.id}
              product={product}
              chosenCriteria={chosenCriteria}
              selectedClient={selectedClient}
            />
          ))
        ) : (
          <p style={{ marginLeft: "10px" }}>No products to show!</p>
        )
      ) : (
        <p>No criteria is selected!</p>
      )}
    </div>
  );
};

export default DiscountedProducts;
