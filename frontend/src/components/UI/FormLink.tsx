import { Link, To } from "react-router-dom";

type props = {
  to: To;
  text: string;
};

const FormLink = ({ to, text }: props) => {
  return (
    <Link
      to={to}
      className="text-sm text-gray-300 text-start hover:underline hover:text-info inline-block">
      {text}
    </Link>
  );
};

export default FormLink;
