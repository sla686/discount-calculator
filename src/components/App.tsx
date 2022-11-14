import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Clients from "./clients/Clients";
import Criteria from "./criteria/Criteria";
import Products from "./products/Products";
import DiscountedProducts from "./result/DiscountedProducts";
import { ClientType } from "../types/ClientType";
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
  const [chosenCriteria, setChosenCriteria] = useState<string[]>([]);

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

  // const criteriaChange = (id: string) => {
  //   chosenCriteria.indexOf(id) !== -1
  //     ? setChosenCriteria(chosenCriteria.filter((item) => item !== id))
  //     : setChosenCriteria([...chosenCriteria, id].sort());
  // };

  const criteriaChange = (criteria: string[]) => {
    setChosenCriteria(criteria);
  };

  return (
    <div className="container">
      <Clients clients={clients} addClient={addClient} delClient={onDelete} />
      <Products
        products={products}
        addProduct={addProduct}
        delProduct={onDelete}
      />
      <Criteria formCriteria={criteriaChange} />
      <DiscountedProducts products={products} chosenCriteria={chosenCriteria} />
    </div>
  );
};

export default App;
