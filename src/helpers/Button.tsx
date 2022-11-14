import { ButtonType } from "../types/ButtonType";

const Button = ({ color, text, type = "button", onClick }: ButtonType) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
