type props = {
  checked: boolean | undefined;
  onChange: () => void;
  name: string;
  color?: string;
};

const FormCheckBox = ({ name, checked, onChange, color }: props) => {
  return (
    <label className="cursor-pointer label">
      <span className="mx-2 text-xl">{name}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`checkbox checkbox-${color}`}
      />
    </label>

    /* needed for dynamic color to work no ideas why tho 
      checkbox-info
      checkbox-secondary */
  );
};

export default FormCheckBox;
