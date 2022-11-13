import { ClientType } from "../types/ClientType";

const Client = ({ client }: { client: ClientType }) => {
  return (
    <>
      <div>
        <h3>{client.name}</h3>
      </div>
    </>
  );
};

export default Client;
