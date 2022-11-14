import { ChangeEvent, useState } from "react";

const InputProduct = ({
  addProduct,
}: {
  addProduct: (name: string, price: string) => void;
}) => {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPrice && inputName.trim() && inputPrice.trim()) {
      addProduct(inputName, inputPrice);
      setInputName("");
      setInputPrice("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add product..."
        value={inputName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputName(e.target.value)
        }
        name="name"
      />
      <input
        type="number"
        className="input-text"
        placeholder="Add price..."
        value={inputPrice}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputPrice(e.target.value)
        }
        name="price"
        min="0"
        step="0.01"
      />
      <input type="submit" className="btn" value={"Add new client"} />
    </form>
  );
};

export default InputProduct;
