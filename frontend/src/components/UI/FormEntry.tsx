type props = {
  name: string;
  placeholder: string;
  title: string;
  value: string | number | readonly string[] | undefined;
  onChange: (name: any, value: string) => void;
};

const FormEntry = ({ name, value, placeholder, onChange, title }: props) => {
  return (
    <div>
      <h1 className="label label-text text-sm"> {title} </h1>
      <input
        name={name}
        onChange={({ target }) => onChange(name, target.value)}
        value={value}
        placeholder={placeholder}
        className="w-full input input-border h-10"
      />
    </div>
  );
};

export default FormEntry;
