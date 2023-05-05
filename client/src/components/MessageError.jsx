import { toast } from "react-hot-toast";

export function MessageError() {
  const notify = () =>
    toast.error("Usuario, correo y/o contraseña incorrectas");

  return <div>{notify}</div>;
}
