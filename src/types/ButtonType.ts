export interface ButtonType {
  color: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}
