type props = {
  title: string;
};

const FormHeader = ({ title }: props) => {
  return (
    <h1 className="text-gray-300 text-3xl text-center font-semibold ">
      {title}
      <span className="text-info text-center"> ChatApp </span>
    </h1>
  );
};

export default FormHeader;
