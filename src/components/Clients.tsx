import { ClientType } from "../types/ClientType";
import Client from "./Client";

const Clients = ({ clients }: { clients: ClientType[] }) => {
  return (
    <>
      <h2>Clients</h2>
      {clients.map((client) => (
        <Client key={client.id} client={client} />
      ))}
    </>
  );
};

export default Clients;
