import { useState } from "react";
import { ClientType } from "../types/ClientType";

import Button from "./Button";
import Clients from "./Clients";
import Criteria from "./Criteria";
import Products from "./Products";

const App = () => {
  const [clients, setClients] = useState<ClientType[]>([
    {
      id: 1,
      name: "Clockwork Inc.",
    },
    {
      id: 2,
      name: "Macrosoft",
    },
    {
      id: 3,
      name: "Bodybook",
    },
  ]);

  return (
    <div className="container">
      <div className="clients">
        {clients.length > 0 ? (
          <Clients clients={clients} />
        ) : (
          <p style={{ marginLeft: "10px" }}>No clients to show!</p>
        )}
        <Button
          color="#4A86E8"
          text="Add a new client"
          onClick={() => console.log("Button pressed")}
        />
      </div>
      <Criteria />
      <Products />
    </div>
  );
};

export default App;
