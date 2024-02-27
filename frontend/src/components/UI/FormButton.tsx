type props = {
  children: React.ReactNode;
};

const FormButton = ({ children }: props) => {
  return (
    <div className="py-2">
      <button
        type="submit"
        className=" w-full btn btn-outline btn-info block text-xl">
        {children}
      </button>
    </div>
  );
};

export default FormButton;
