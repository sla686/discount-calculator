import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ClientType } from "../types/ClientType";
import Clients from "./clients/Clients";
import Criteria from "./criteria/Criteria";
import Products from "./products/Products";
import Result from "./result/Result";
import { ProductType } from "../types/ProductType";

const App = () => {
  const getInitialClients = () => {
    const temp = localStorage.getItem("clients") || "";
    return temp ? JSON.parse(temp) : [];
  };
  const getInitialProducts = () => {
    const temp = localStorage.getItem("products") || "";
    return temp ? JSON.parse(temp) : [];
  };

  const [clients, setClients] = useState<ClientType[]>(getInitialClients());
  const [products, setProducts] = useState<ProductType[]>(getInitialProducts());

  useEffect(() => {
    const temp = JSON.stringify(clients);
    localStorage.setItem("clients", temp);
  }, [clients]);

  useEffect(() => {
    const temp = JSON.stringify(products);
    localStorage.setItem("products", temp);
  }, [products]);

  const addClient = (name: string) => {
    const newClient = {
      id: uuidv4(),
      name,
    };
    setClients([...clients, newClient]);
  };

  const addProduct = (name: string, price: string) => {
    const newProduct = {
      id: uuidv4(),
      name,
      price,
    };
    setProducts([...products, newProduct]);
  };

  const onDelete = (id: string, type: string) => {
    switch (type) {
      case "product":
      case "products":
        setProducts([...products.filter((product) => product.id !== id)]);
        break;

      case "client":
      case "clients":
        setClients([...clients.filter((client) => client.id !== id)]);
        break;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <Clients clients={clients} addClient={addClient} delClient={onDelete} />
      <Products
        products={products}
        addProduct={addProduct}
        delProduct={onDelete}
      />
      <Criteria />
      <Result />
    </div>
  );
};

export default App;
