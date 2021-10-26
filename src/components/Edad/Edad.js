import { useParams } from "react-router-dom";

export const Edad = () => {
  const { edad } = useParams();
  return <h2>{edad}</h2>;
};
