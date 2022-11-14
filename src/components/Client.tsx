import { ClientType } from "../types/ClientType";
import { FaTimesCircle } from "react-icons/fa";

const Client = ({
  client,
  delClient,
}: {
  client: ClientType;
  delClient: (id: string, type: string) => void;
}) => {
  return (
    <>
      <div className="client">
        <h3>{client.name}</h3>
        <FaTimesCircle
          className="circle"
          onClick={() => delClient(client.id, "client")}
        />
      </div>
    </>
  );
};

export default Client;
