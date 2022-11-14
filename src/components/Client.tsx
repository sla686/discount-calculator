import { ClientType } from "../types/ClientType";

const Client = ({ client }: { client: ClientType }) => {
  return (
    <>
      <div className="client">
        <h3>{client.name}</h3>
      </div>
    </>
  );
};

export default Client;
