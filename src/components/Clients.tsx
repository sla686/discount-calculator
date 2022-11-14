import { ClientType } from "../types/ClientType";
import Client from "./Client";
import InputClient from "./InputClient";

const Clients = ({
  clients,
  addClient,
  delClient,
}: {
  clients: ClientType[];
  addClient: (name: string) => void;
  delClient: (id: string, type: string) => void;
}) => {
  return (
    <div className="clients">
      <h2>Clients</h2>
      <InputClient addClient={addClient} />
      {clients.length > 0 ? (
        clients.map((client) => (
          <Client key={client.id} client={client} delClient={delClient} />
        ))
      ) : (
        <p style={{ marginLeft: "10px" }}>No clients to show!</p>
      )}
    </div>
  );
};

export default Clients;
