import { ChangeEvent, useState } from "react";

const InputClient = ({ addClient }: { addClient: (name: string) => void }) => {
  const [inputName, setInputName] = useState({
    name: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName({
      ...inputName,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName.name.trim()) {
      addClient(inputName.name);
      setInputName({
        name: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add client..."
        value={inputName.name}
        onChange={onChange}
        name="name"
      />
      <input type="submit" className="btn btn-block" value={"Add new client"} />
    </form>
  );
};

export default InputClient;
